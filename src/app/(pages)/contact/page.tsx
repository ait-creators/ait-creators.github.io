import Image from "next/image";
import Link from "next/link";
import Header from "./_components/header";

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex size-full items-center justify-center px-4">
        <ul className="offside mt-8 text-center text-base md:text-4xl">
          <li>氏名</li>
          <li className="pt-4 md:pt-16">E-mail</li>
          <li className="pt-4 md:pt-16">問い合わせ内容・詳細</li>
          <li className="pt-4 md:pt-16">
            これらの内容を記載の上、各種SNSアカウントにてお問い合わせください。
          </li>
          <li>
            <div className="mt-8 flex justify-around md:mt-16">
              <Link href="https://x.com/ait_creators" target="_blank">
                <Image
                  alt="X"
                  className="rounded-3xl bg-slate-200 p-4"
                  height={100}
                  src="/x.png"
                  width={100}
                />
              </Link>
              <Link
                href="https://www.instagram.com/ait.creators"
                target="_blank"
              >
                <Image
                  alt="Instagram"
                  className="rounded-3xl bg-slate-200 p-4"
                  height={100}
                  src="/instagram.png"
                  width={100}
                />
              </Link>
              <Link href="https://www.tiktok.com/@ait.creators" target="_blank">
                <Image
                  alt="Tiktok"
                  className="rounded-3xl bg-slate-200 p-4"
                  height={100}
                  src="/tiktok.png"
                  width={100}
                />
              </Link>
              <Link
                href="https://www.youtube.com/@ait.creators"
                target="_blank"
              >
                <Image
                  alt="YouTube"
                  className="rounded-3xl bg-slate-200 p-4"
                  height={100}
                  src="/youtube.png"
                  width={100}
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
