"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../Assets/logo.png";
import Facebook from "../../Assets/facebook-removebg-preview-two.png";
import Twitter from "../../Assets/twitter-removebg-preview-two.png";
import Insta from "../../Assets/insta-removebg-preview-two.png";
import Tiktok from "../../Assets/tiktok.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <Image src={Logo} alt="Logo" width={70} height={70} />
        <p>2350 Beaver Ruin Rd, Norcross Georgia 30071</p>
        <p>
          <a href="mailto:Contact@fantasymmadness.com">
            Contact@fantasymmadness.com
          </a>
        </p>
        <p className={styles.footerCompanyName}>Fantasy Mmadness © 2024</p>
      </div>

      <div className={styles.footerCenter}>
        <p className={styles.footerLinks}>
          <Link href="/privacy-policy" className={styles.footerLink}>
            Privacy policy
          </Link>
          <Link href="/terms-of-service" className={styles.footerLink}>
            Terms of service
          </Link>
          <Link href="/testimonials" className={styles.footerLink}>
            Testimonials
          </Link>
          <Link href="/contact" className={styles.footerLink}>
            Contact
          </Link>
        </p>
      </div>

      <div className={styles.footerRight}>
        <p className={styles.footerCompanyAbout}>
          <span>About Fantasy Mmadness LLC</span>
          Fantasy Mmadness LLC is a company dedicated to creating engaging
          fantasy sports experiences for fans.{" "}
          <Link href="/about" style={{ textDecoration: "none" }}>
            view more
          </Link>
        </p>

        <div className={styles.footerIcons}>
          <a
            href="https://www.facebook.com/share/2pzYV9XdQpAU7n6p/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent" }}
          >
            <Image
              src={Facebook}
              alt="Facebook"
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </a>
          <a
            href="https://www.instagram.com/fantasymmadness"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent" }}
          >
            <Image
              src={Insta}
              alt="Instagram"
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </a>
          <a
            href="https://x.com/davis_kell51697"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent" }}
          >
            <Image
              src={Twitter}
              alt="Twitter"
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </a>
          <a
            href="https://www.tiktok.com/@fantasy.mmadness"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent" }}
          >
            <Image
              src={Tiktok}
              alt="Tiktok"
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
