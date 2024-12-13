import React from 'react';

interface WaistcoatSelection {
  onEdit?: () => void;
}

export const WaistcoatSelection: React.FC<WaistcoatSelection> = ({
  onEdit,
}) => {
  return (
    <>
      <div className="mx-auto sm:max-w-[300px] lg:max-w-[255px]">
        <div className="lg:mb-2 flex gap-1 justify-center">
          <span className="font-medium">Хантааз нэмэлтээр</span>
          <div className="rounded-[10px] w-fit bg-[#efefef] px-[7px] py-[3px] text-sm">
            +50,000₮
          </div>
        </div>
        <div className="mb-[5px] md:mb-2 text-sm text-center line-clamp-2 lg:line-clamp-3">
          Ёслолын арга хэмжээнд зориулж хантааз нэмсэнээр таны хослол илүү
          тансаг харагдана
        </div>
        <div className="text-center">
          <button
            onClick={onEdit}
            className="py-[9px] md:py-3 min-w-[44px] min-h-[44px] px-4 text-sm border rounded-3xl border-[#e1e1e1]"
          >
            Хантааз нэмэх
          </button>
        </div>
      </div>
    </>
  );
};
