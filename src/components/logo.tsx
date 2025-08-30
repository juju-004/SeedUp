import Image from "next/image";

export function Logo() {
  return (
    <div className="relative flex items-center gap-2">
      <Image
        src={"/images/plant.svg"}
        width={50}
        height={50}
        className="size-7"
        alt="Logo logo"
        role="presentation"
        quality={100}
      />
      <span className="text-2xl font-bold">Seed up</span>
    </div>
  );
}
