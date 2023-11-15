import { StaticImageData } from "next/image";
import React, { useState } from "react";

import CAT from '../../../public/images/WhatsApp Image 2023-11-14 at 00.41.05.jpeg'
import DOG from '../../../public/images/WhatsApp Image 2023-11-14 at 00.43.07.jpeg'
import { Flex } from "@radix-ui/themes";
import PetsCard from "@/components/PatsCard/PetsCard";
import PetAdder from "@/components/PetAdder/PetAdder";

interface PetsProps {
  name: string;
  petID: string;
  petSpecies: string;
  petSex: string;
  petAge: number;
  petAgeUnit: string;
  petAgeAproximate: boolean;
  petWeight: number;
  petWeightUnit: string;
  petFurColor: string;
  petFurType: string;
  petDescription: string;
  petImgURL: StaticImageData;
  petImgALT: string;
  adoptionSubmissions: number;
}

let pets: Array<PetsProps> = [
  {
    name: "Flora",
    petID: "368436169",
    petSpecies: "gato",
    petAge: 3,
    petAgeUnit: "anos",
    petWeight: 2.5,
    petWeightUnit: "Kg",
    petFurColor: "branco",
    petFurType: "longo",
    petDescription:
      "Cãozinho de 3 anos com pelo longo, temperamento calmo e 30kg, está ansioso para ser adotado e encontrar um lar amoroso. Sua personalidade tranquila e pelagem encantadora fazem dele o companheiro perfeito. Adote Thomas e dê a ele a chance de ter um lar para sempre cheio de amor e carinho.",
    petImgURL: CAT,
    petImgALT: "Imagem meramente ilustrativa",
    petAgeAproximate: true,
    petSex: "M",
    adoptionSubmissions: 1,
  },
  {
    name: "Totó",
    petID: "32491635",
    petSpecies: "cão",
    petAge: 3,
    petAgeUnit: "anos",
    petWeight: 2.5,
    petWeightUnit: "Kg",
    petFurColor: "branco",
    petFurType: "longo",
    petDescription:
      "Gatinho de 3 anos com pelo longo, temperamento calmo e 30kg, está ansioso para ser adotado e encontrar um lar amoroso. Sua personalidade tranquila e pelagem encantadora fazem dele o companheiro perfeito. Adote Thomas e dê a ele a chance de ter um lar para sempre cheio de amor e carinho.",
    petImgURL: DOG,
    petImgALT: "Imagem meramente ilustrativa",
    petAgeAproximate: true,
    petSex: "M",
    adoptionSubmissions: 3,
  },
];

const ManagePets = () => {
  const [petsArray, setPetsArray] = useState(pets);
  return (
  <Flex direction="row" justify="center" gap="1" wrap="wrap" className="w-full">
    <PetAdder
    dataArray={pets}
    dataAdderFunction={()=>setPetsArray}/>
    <PetsCard PetsArray={pets} />
  </Flex>);
};

export default ManagePets;
