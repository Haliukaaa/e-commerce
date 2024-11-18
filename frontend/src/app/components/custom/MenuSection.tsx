'use client';
import React, { useState } from 'react';

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

interface MenuSectionProps {
    onStyleSelect: (style: Style) => void;
    onMaterialSelect: (material: Material) => void;
    selectedStyle: Style | null;
    selectedMaterial: Material | null;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
    onStyleSelect,
    onMaterialSelect,
    selectedStyle,
    selectedMaterial
}) => {
    const [activeSection, setActiveSection] = useState('material');

    const styles = [
        { id: 1, name: 'Classic Fit', stylePrefix: 'style1' },
        { id: 2, name: 'Slim Fit', stylePrefix: 'style2' },
        { id: 3, name: 'Modern Fit', stylePrefix: 'style3' },
    ];

    const materialInfo = [
        { id: 1, name: 'Cotton', price: '$799', fabricNumber: 1 },
        { id: 2, name: 'Wool', price: '$899', fabricNumber: 2 },
        { id: 3, name: 'Cashmere', price: '$999', fabricNumber: 3 },
        { id: 4, name: 'Linen', price: '$849', fabricNumber: 4 },
        { id: 5, name: 'Silk', price: '$1299', fabricNumber: 5 },
        { id: 6, name: 'Polyester', price: '$699', fabricNumber: 6 },
    ];

    // Get materials for selected style
    const getCurrentMaterials = () => {
        const stylePrefix = selectedStyle ? selectedStyle.stylePrefix : 'style1';
        return materialInfo.map((material) => ({
            ...material,
            image: `/${stylePrefix}-fab${material.fabricNumber}.png`
        }));
    };

    // Get styles with selected material
    const getCurrentStyles = () => {
        if (!selectedMaterial) {
            return styles.map(style => ({
                ...style,
                image: `/${style.stylePrefix}-fab1.png`
            }));
        }

        return styles.map(style => ({
            ...style,
            image: `/${style.stylePrefix}-fab${selectedMaterial.fabricNumber}.png`
        }));
    };

    return (
        <div className="bg-white p-6">
            <div className="flex gap-4 mb-8">
                <button
                    className={`btn btn-circle text-info ${activeSection === 'material' ? 'bg-blue-100' : ''}`}
                    onClick={() => setActiveSection('material')}
                >
                    Материал
                </button>
                <button
                    className={`btn btn-circle text-info ${activeSection === 'style' ? 'bg-blue-100' : ''}`}
                    onClick={() => setActiveSection('style')}
                >
                    Загвар
                </button>
            </div>

            {activeSection === 'material' && (
                <div className="space-y-6">
                    <div className="flex lg:flex-col overflow-x-auto whitespace-nowrap gap-6 justify-items-center">
                        {getCurrentMaterials().map((material) => (
                            <div
                                key={material.id}
                                onClick={() => onMaterialSelect(material)}
                                className={`cursor-pointer transition-all ${selectedMaterial?.id === material.id ? 'scale-105' : ''
                                    }`}
                            >
                                <div className="w-36 h-36 rounded-lg overflow-hidden border-2 hover:border-blue-500">
                                    <img
                                        src={material.image}
                                        alt={material.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        {selectedMaterial ? (
                            <div>
                                <p className="text-lg font-medium">{selectedMaterial.name}</p>
                                <p className="text-gray-600">{selectedMaterial.price}</p>
                            </div>
                        ) : (
                            <p className="text-gray-500">Select a material</p>
                        )}
                    </div>
                </div>
            )}

            {activeSection === 'style' && (
                <div>
                    <div className="flex justify-center gap-6">
                        {getCurrentStyles().map((style) => (
                            <div
                                key={style.id}
                                onClick={() => onStyleSelect(style)}
                                className="cursor-pointer"
                            >
                                <div className={`w-36 h-36 rounded-lg overflow-hidden border-2 mb-2 ${selectedStyle?.id === style.id ? 'border-blue-500' : 'border-gray-200'
                                    }`}>
                                    <img
                                        src={style.image}
                                        alt={style.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-medium">
                                    {style.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};