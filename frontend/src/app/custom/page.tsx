'use client';
import { ImageSection, MenuSection } from "../components/custom";
import { useState } from "react";
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
const Home = () => {
    const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
    const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

    const handleStyleSelect = (style: Style) => {
        setSelectedStyle(style);
    };

    const handleMaterialSelect = (material: Material) => {
        setSelectedMaterial(material);
    };
    return (
        <div className='grid grid-cols-1 grid-rows-2 h-full w-full pt-11 lg:pt-[50px]'>
            <ImageSection
                selectedStyle={selectedStyle}
                selectedMaterial={selectedMaterial}
            />
            <MenuSection
                selectedStyle={selectedStyle}
                selectedMaterial={selectedMaterial}
                onStyleSelect={handleStyleSelect}
                onMaterialSelect={handleMaterialSelect}
            />
        </div >
    );
};

export default Home;