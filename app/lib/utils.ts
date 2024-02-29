// This file is for helper functions, such as hash functions, string manipulation, etc.
export function documentReadyPromise<T>(creator: () => Promise<T>): Promise<T> {
  return new Promise((resolve): void => {
    if (document.readyState === "complete") {
      resolve(creator());
    } else {
      window.addEventListener("load", () => resolve(creator()));
    }
  });
}

export function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value).then(() => console.log("Copied!"));
}

export const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent,
);