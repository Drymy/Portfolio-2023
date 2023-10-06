import React from 'react';

export function ContactSection({ visible }) {
  return (
    <div className={`content ${visible ? 'fade-in' : 'contact'}`}>
      <div className='contactStyle'>
        <h2> Contactez-moi </h2>
        <p>06 95 14 61 37
        <br />
        simicstef34@gmail.com
        <br />
        <a href="https://www.linkedin.com/in/stefan-simic-5204971b9/">Page LinkedIn</a></p>
        <h2> Téléchargez mes CV </h2>
        <p className='customLinks'><a href="https://cdn.discordapp.com/attachments/928038965129392151/1156214201208029296/CV_SIMIC_DESIGN.pdf?ex=651427e2&is=6512d662&hm=dd781d1155a47068d5b6f1a7a86cc3ea44d42e697798d8a8f90c42e67d5632ec&">
          CV Design</a>
          <br/>
          <a href="https://cdn.discordapp.com/attachments/928038965129392151/1156214201866530887/CV_SIMIC_DEV.pdf?ex=651427e3&is=6512d663&hm=23c49cea0a66aa1a3ce1ef511330131c721ba45d6f3d1525e2437b863606e618&">
          CV Developpeur</a>
        </p>
      </div>
    </div>
  );
}
