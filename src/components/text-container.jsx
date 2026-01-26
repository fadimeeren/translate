const TextContainer = () => {
  return (
    <div className="flex gap-4 mt-6 lg: gap-8 flex-col lg-flex-row">
      {/* Çevrilecek Metin */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-zinc-300">Çevrilecek Metin</label>
          <button className="text-sm text-zinc-400 hover:text-zinc-200">
            Temizle
          </button>
        </div>

        <div className="relative">
          <textarea className="textarea"></textarea>
          <div className="absolute bottom-2 right-2 text-sm text-zinc-500 bg-zinc-100">
            100 karakter
          </div>
        </div>
      </div>

      {/* İkon */}

      {/* Çevrilmiş Metin */}
    </div>
  );
};

export default TextContainer;
