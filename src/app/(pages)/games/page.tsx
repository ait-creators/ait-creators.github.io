import All from "./_components/all";
import Header from "./_components/header";
import Pickup from "./_components/pickup";

export default function Page() {
  return (
    <div className="px-4">
      <Header />
      <Pickup />
      <All />
    </div>
  );
}
