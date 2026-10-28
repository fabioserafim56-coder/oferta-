import { useEffect, useState } from "react";

/**
 * Um único sistema de reveal on-scroll para toda a página:
 * observa todo elemento `.reveal` e adiciona `.is-in` quando ele entra na viewport.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (nodes.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      for (const node of nodes) node.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          window.setTimeout(() => el.classList.add("is-in"), delay);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);
}

/** True depois que a página passa de `offset` px de scroll. */
export function useScrolledPast(offset: number) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const onScroll = () => setPassed(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return passed;
}
