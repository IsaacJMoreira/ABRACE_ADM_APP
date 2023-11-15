import React, { FC, ReactNode, useEffect, useState } from 'react'
import PetCard from '../PetCard/PetCard'
import { Box, Card, Flex, Heading, ScrollArea, Separator } from '@radix-ui/themes'
import CAT from '../../public/images/WhatsApp Image 2023-11-14 at 00.41.05.jpeg'
import DOG from '../../public/images/WhatsApp Image 2023-11-14 at 00.43.07.jpeg'
import { StaticImageData } from 'next/image'

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

  interface PetsArrayProps {
    children?: ReactNode;
    PetsArray: Array<PetsProps>;
  }




const PetsCard: FC<PetsArrayProps> = (props) => {
    const [petsArray , setPetsArray] = useState([] as Array<PetsProps>)
    useEffect(()=>{
        setPetsArray(props.PetsArray);
    }, []);
  return (
    <Card className="w-2/5 min-w-[400px]">
        <Flex direction='row' justify='between'>
        <Heading color='lime'>Animais Cadastrados</Heading>
          </Flex>
        
        <Separator orientation= 'horizontal' size='4'/>
        <br />
        <ScrollArea
        type="always"
        scrollbars="vertical"
        style={{ height: "100%", maxHeight: 500 }}
      >
        <Box p='2' pr='8'>
        <Flex direction='column' justify='between' gap="1" >
            
    {petsArray.map((pet)=>{
        return(

        <PetCard
        name={pet.name}
        petID={pet.petID}
        petAge={pet.petAge}
        petAgeUnit={pet.petAgeUnit}
        petFurType={pet.petFurType}
        petFurColor={pet.petFurColor}
        petImgURL= {pet.petImgURL}
        petImgALT={pet.petImgALT}
        petDescription={pet.petDescription}
        petSpecies={pet.petSpecies}
        petWeight={pet.petWeight}
        petWeightUnit={pet.petWeightUnit}
        petSex={pet.petSex}
        petAgeAproximate = {pet.petAgeAproximate}
        adoptionSubmissions={pet.adoptionSubmissions}
        />
   
        )
        
    })}
    </Flex>
    </Box>
    </ScrollArea>
    </Card>
  )




    
  
}

export default PetsCard