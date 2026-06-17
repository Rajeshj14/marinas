import Image from "next/image";

export function Header() {
  return (
    <>
      <div className="urgent">
        A hernia does <b>not</b> heal on its own - the earlier it is assessed,
        the simpler your options. <b>Limited slots this week.</b>
      </div>

      <header className="nav">
        <div className="nav-in">
          <div className="brand">
            <Image
              src="/Marina-logo.png"
              alt="Marina's Clinic"
              width={130}
              height={52}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <span className="nav-tag">Hernia &amp; Diastasis Recti Care</span>
          <a href="#book" className="btn">
            Book Consultation
          </a>
        </div>
      </header>
    </>
  );
}
