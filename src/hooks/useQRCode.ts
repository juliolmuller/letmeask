const DEFAULT_IMG_SIZE = 200;

function useQRCode(target: string, size = DEFAULT_IMG_SIZE): string {
  let url = encodeURI(target);

  if (target.match(/^https?:\/\//i) || target.startsWith('//')) {
    // if "target" is an absolute URL
    // keep initial value of "url"
  } else if (target.startsWith('/')) {
    // if "target" is relative to the root
    url = `${globalThis.location?.origin}${url}`;
  } else if (target.match(/^[-\w%.~+]/)) {
    // if "target" is relative to current location
    url = `${globalThis.location?.href}/${url}`;
  }

  return `https://api.qrserver.com/v1/create-qr-code?size=${size}x${size}&data=${url}`;
}

export default useQRCode;
