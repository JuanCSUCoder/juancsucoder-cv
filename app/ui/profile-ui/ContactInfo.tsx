import TitledElement from "@/components/custom/TitledElement";

export default function ContactInfo() {
    return (
      <ul>
        <TitledElement title="Phone" href="tel:+573186506135">
          +57 318 650 6135
        </TitledElement>
        <TitledElement title="Email" href="mailto:jcsu2019369@gmail.com">
          jcsu2019369@gmail.com
        </TitledElement>
        <TitledElement
          title="LinkedIn"
          href="https://www.linkedin.com/in/juancsucoder/"
        >
          /in/juancsucoder
        </TitledElement>
        <TitledElement title="Telegram" href="https://t.me/juancsucoder">
          @juancsucoder
        </TitledElement>
        <TitledElement
          title="Instagram"
          href="https://www.instagram.com/juancsucoder/"
        >
          @juancsucoder
        </TitledElement>
      </ul>
    );
}