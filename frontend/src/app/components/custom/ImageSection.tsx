import Image from 'next/image';

interface Style {
    id: number;
    name: string;
    stylePrefix: string;
    image?: string;
}

interface Material {
    id: number;
    name: string;
    price: string;
    fabricNumber: number;
    image?: string;
}

interface ImageSectionProps {
    selectedStyle: Style | null;
    selectedMaterial: Material | null;
}
export const ImageSection: React.FC<ImageSectionProps> = ({ selectedStyle, selectedMaterial }) => {
    const imagePath = selectedStyle && selectedMaterial
        ? `/${selectedStyle.stylePrefix}-fab${selectedMaterial.fabricNumber}.png`
        : '/style1-fab1.png';

    return (
        <div className='w-full h-full bg-neutral'>
            <div className='h-full w-full relative'>
                <button className="btn btn-neutral absolute right-0 top-0">Дуусгах</button>
                <div className='h-full w-full'>
                    <Image
                        src={imagePath}
                        alt={`${selectedStyle?.name || 'Default'} with ${selectedMaterial?.name || 'default'} material`}
                        width={448}
                        height={612}
                        className="object-cover"
                    />
                </div>
            </div>
            <div></div>
        </div>
    );
};