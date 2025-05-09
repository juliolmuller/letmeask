import Head from 'next/head';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';

import Button from '~/components/Button';
import QuestionCard from '~/components/QuestionCard';
import RoomCode from '~/components/RoomCode';
import { useAuth, useRoom } from '~/hooks';
import { database } from '~/services/firebase';
import type { Question } from '~/types';

import styles from './styles.module.scss';

function RoomDetailsPage(): ReactNode {
  const router = useRouter();
  const roomId = router.query.id as string;
  const { user, signInWithGoogle } = useAuth();
  const { room, questions } = useRoom(roomId);
  const [newQuestion, setNewQuestion] = useState('');
  const canSubmitQuestion = Boolean(user && newQuestion.trim());

  async function handleAuthenticate(): Promise<void> {
    await signInWithGoogle();
  }

  async function handleCreateQuestion(event: FormEvent): Promise<void> {
    event.preventDefault();

    if (!user) {
      throw new Error('Você precisa se registrar para enviar uma pergunta.');
    }

    await database.ref(`/rooms/${roomId}/questions`).push({
      content: newQuestion.trim(),
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isAnswered: false,
      isHighlighted: false,
      createdAt: new Date().toISOString(),
    });

    setNewQuestion('');
  }

  async function handleLikeQuestion(question: Question): Promise<void> {
    if (!user) {
      handleAuthenticate();
      return;
    }

    if (question.likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${question.id}/likes/${question.likeId}`)
        .remove();
    } else {
      await database
        .ref(`rooms/${roomId}/questions/${question.id}/likes`)
        .push({ authorId: user.id });
    }
  }

  return (
    <div className={styles.roomDetailsPage}>
      <Head>
        <title>Letmeask :: {room?.title}</title>
      </Head>

      <header>
        <div className={styles.content}>
          <Image src="/img/logo.svg" alt="logo" objectFit="contain" height={45} width={135} />
          <div>
            <RoomCode value={roomId} />
            {room && user?.id === room?.authorId && (
              <Button outline onClick={() => router.push(`./${roomId}/admin`)}>
                Visão de Administrador
              </Button>
            )}
          </div>
        </div>
      </header>

      <main>
        <div className={styles.title}>
          <h1>{room?.title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length} pergunta{questions.length > 1 && 's'}
            </span>
          )}
        </div>

        <form onSubmit={handleCreateQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
          />

          <div className={styles.formFooter}>
            {user ? (
              <div className={styles.userInfo}>
                <Image src={user.avatar} alt={user.name} objectFit="cover" height={32} width={32} />{' '}
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta,
                <button type="button" onClick={handleAuthenticate}>
                  faça seu login
                </button>
                .
              </span>
            )}
            <Button type="submit" disabled={!canSubmitQuestion}>
              Enviar pergunta
            </Button>
          </div>
        </form>

        <div className={styles.questionsList}>
          {!questions.length ? (
            <div className={styles.emptyList}>
              <Image
                src="/img/empty-questions.svg"
                alt="Nenhuma pergunta ainda"
                layout="intrinsic"
                height={150}
                width={150}
              />
              <strong>Nenhuma resposta por aqui...</strong>
              <p>Seja a primeira pessoa a enviar uma pergunta</p>
            </div>
          ) : (
            questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onLike={() => handleLikeQuestion(question)}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default RoomDetailsPage;
