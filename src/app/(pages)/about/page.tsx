import Header from "./_components/header";

export default function Page() {
  return (
    <div className="offside overflow-x-hidden px-4 pt-10">
      <Header />
      <div
        className="mx-auto mt-20 flex w-fit items-start justify-center"
        style={{
          backgroundImage: "url('/icon.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
          }}
        >
          <div className="double-border text-base md:text-3xl">
            『BeCreAIT』(ビックリエイト)は愛知工業大学の学生が
            <br />
            ＜TOKYO GAME SHOW＞に出展するゲームを制作するために集結したチーム。
            <br />
            <br />
            「Be」+「Create」+「AIT」
            <br />
            会場に来たお客さんがビックリするようなゲームを作るという意味が込められています。
            <br />
            <br />
            我々が作るゲームには一つ特徴があります。
            <br />
            普段ゲームのコントローラーとして使用しないものをインタフェースとしたゲームです。
          </div>
        </div>
      </div>
    </div>
  );
}
