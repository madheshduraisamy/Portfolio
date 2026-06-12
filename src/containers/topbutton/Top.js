import React, {useEffect, useState} from "react";
import "./Top.scss";

export default function Top() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setVisible(scrollTop > 20);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function TopEvent() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={TopEvent}
      id="topButton"
      title="Go to top"
      style={{visibility: visible ? "visible" : "hidden"}}
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
