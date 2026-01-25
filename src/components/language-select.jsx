import { ArrowLeftRight } from "lucide-react";

const LanguageSelect = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-3 lg-flex-row">
        {/* kaynak dil */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-zinc-300 mb-2">Kaynak Dil</label>
        </div>

        {/* değiştirme butonu */}
        <div className="flex item-center justify-center">
          <button className="size-10 lg-size-12 bg-zinc-700  hover:bg-zinc-600 disabled:bg-zinc-800 disabled:opacity-0 rounded-full flex justify-center items-center cursor-pointer">
            <ArrowLeftRight />
          </button>
        </div>

        {/* hedef dil */}
        <div className="flex-1 w-full">
          <label className=" block text-sm text-zinc-300 mb-2">Hedef Dil</label>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
