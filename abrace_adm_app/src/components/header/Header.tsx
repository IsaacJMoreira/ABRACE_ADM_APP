"use client";
import {
  Dialog,
  Button,
  Flex,
  Separator,
  TextField,
  Link,
  Box,
  Text,
  Card,
  Badge,
} from "@radix-ui/themes";

import {
  Cross1Icon,
  CheckIcon,
  CheckboxIcon,
  ChevronDownIcon,
  ExitIcon,
  PersonIcon,
  LockClosedIcon,
  AvatarIcon,
  TriangleDownIcon,
  ClipboardIcon,
} from "@radix-ui/react-icons";
import * as Progress from "@radix-ui/react-progress";
import NextImage from "next/image";
import ABRACE from '../../public/images/ABRACE.png';

import WhoArU from "../../public/icons/53324372.png";
import Hi from "../../public/icons/74dec39f3bdda7417bb318f5b98afe3e 1.png";
import DogPersonIcon from "../../public/icons/dogPersonIcon.png";
import { useState, ReactNode, FC } from "react";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

//this component should fetch the app logo
//it also should display a different simbol of greating

interface MyProps {
  children?: ReactNode;
  iconNI: StaticImport;
  iconAlt: string;
  userName?: string;
  changeName?: any;
  changeLogin?: any;
  phoneNumber?: string;
  userID?: string;
}

const LoggedInModal: FC<MyProps> = React.forwardRef(function (props, ref) {
  const [progress, setProgress] = useState(10);
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface">
          <NextImage className="w-5" src={props.iconNI} alt={props.iconAlt} />
          {`olá, ${props.userName}`}
          <Separator orientation="vertical" size="1"></Separator>
          <ChevronDownIcon height="18" width="18" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Flex direction="row" align="start" justify="between" gap="3">
          <Dialog.Title>{props.userName}</Dialog.Title>
          {progress < 100 ? (
            <Card variant="ghost" className=" w-40 p-1 relative -top-5">
              <Flex align="center" justify="between" gap="3" direction="row">
                <Box className="w-full">
                  <div
                    className="w-full rounded-md gap-0  relative top-3"
                    style={{ transform: `translateX(${progress - 5.5}%)` }}
                  >
                    <Flex
                      direction="column"
                      gap="0"
                      justify="between"
                      align="start"
                    >
                      <Text as="div" size="1">{`${progress}%`}</Text>
                      <TriangleDownIcon className="relative -top-2" />
                    </Flex>
                  </div>

                  <Progress.Root
                    className="relative overflow-hidden bg-lime-900 rounded-full w-100 h-[10px]"
                    style={{
                      transform: "translateZ(0)",
                    }}
                    value={progress}
                  >
                    <Progress.Indicator
                      className="bg-lime-300 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                      style={{
                        transform: `translateX(-${100 - progress}%)`,
                      }}
                    />
                  </Progress.Root>
                </Box>
              </Flex>
            </Card>
          ) : (
            <Badge size='1'>
              <CheckboxIcon />
              {`${progress}%`}
            </Badge>
          )}
        </Flex>

        <Separator orientation="horizontal" size="4" />

        <Flex
          direction="column"
          justify="start"
          gap="3"
          align="center"
          className="w-full"
        >
          {progress < 100 ? (
            <>
              <Text as="div" size="1" color="lime">
                A<strong> ABRACE</strong> e todos os animais sob nossa
                responsabilidade agradecem seu interesse nessa causa animal!
                <br />
                <strong>Seu perfil ainda não foi concluído.</strong> Isso
                significa que você ainda não pode proseguir com a adoção de um
                pet nem ser voluntário ABRACE.
                <br />
                Para concluir o seu perfil, é necessário o preenchimento do
                nosso questionário. Isto levará cerca de
                <strong> 10 min.</strong> Todas as perguntas e informações
                requeridas foram desenvolvidas para garantir que um processo de
                adoção responsável.
                <br />
                <strong>
                  Clique no botão abaixo para concluir o seu perfil.
                </strong>
              </Text>
              <Link href={`/form/${props.userName}`}>
                <Button variant="surface">
                  <ClipboardIcon width="18" height="18" />
                  Responder ao questionário
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Text as="div" size="1" color="lime">
                A<strong> ABRACE</strong> e todos os animais sob nossa
                responsabilidade agradecem seu comprometimento com essa causa
                animal!
                <br />
                <strong>Seu perfil está 100% completo.</strong> Isso significa
                que você já pode proseguir com a adoção de um pet, ser
                voluntário ABRACE e até realizar doações.
                <br />
                Te convidamos para conhecer seu futuro melhor amigo!
              </Text>
              
            </>
          )}

          <Separator orientation="horizontal" size="4" />
          <Flex direction="row" justify="between" gap="3" className="w-full">
            <Dialog.Close>
              <Button variant="surface" onClick={props.changeLogin}>
                <ExitIcon width="18" height="18" />
                Logout
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Link href={`/user/${props.userName}`}>
                <Button variant="surface" onClick={props.changeLogin}>
                  <PersonIcon width="18" height="18" />
                  Perfil
                </Button>
              </Link>
            </Dialog.Close>
            <Dialog.Close>
              <Button variant="surface">
                <Cross1Icon width="18" height="18" />
                Fechar
              </Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
});

const LoggedOutModal: FC<MyProps> = React.forwardRef(function (props, ref) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface">
          <NextImage className="w-8" src={WhoArU} alt="Quem é você? LOGIN" />
          quem é você? <Separator orientation="vertical" size="1" /> LOGIN
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Quem é você?</Dialog.Title>

        <Dialog.Description>
          Faça seu Login no app <strong>ABRACE</strong>
        </Dialog.Description>

        <Flex direction="column" justify="between" gap="3">
          <TextField.Root>
            <TextField.Slot>
              <PersonIcon width="18" height="18" />
            </TextField.Slot>
            <TextField.Input
              placeholder="nome"
              value={props.userName}
              onChange={props.changeName}
            />
          </TextField.Root>
          <TextField.Root>
            <TextField.Slot>
              <LockClosedIcon width="18" height="18" />
            </TextField.Slot>
            <TextField.Input placeholder="senha" />
          </TextField.Root>

          <Flex direction="row" justify="between" gap="3">
            <Dialog.Close>
              <Button variant="surface">
                <Cross1Icon width="18" height="18" />
                Fechar
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button variant="surface" onClick={props.changeLogin}>
                <CheckIcon width="18" height="18" />
                Login
              </Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
});

const logOut = (resetName: CallableFunction, resetLogin: CallableFunction) => {
  resetName("");
  resetLogin(false);
};

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState();
  const [userName, setUserName] = useState("");
  return (
    <div className="sticky bg-[#ffffffaa] top-0 block h-fit w-full p-2 z-50 backdrop-blur ">
      <Flex align="center" justify="between">
        <Flex align="center" justify="between" gap="5">
          <Link href="/">
            <NextImage
              className="w-16 "
              alt="Logo da ABRACE"
              src={ABRACE}
            />
          </Link>
          <Text as= 'div' size='8' weight='bold'>Plataforma Administrativa - ABRACE</Text>
        
        </Flex>

        {!loggedIn ? (
          <LoggedOutModal
            iconAlt="Quem é você?"
            iconNI={WhoArU}
            changeLogin={() => setLoggedIn(true)}
            changeName={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setUserName(e.target.value)}
          />
        ) : (
          <LoggedInModal
            userName={userName}
            iconAlt="Olá!"
            iconNI={Hi}
            changeLogin={() => logOut(setUserName, setLoggedIn)}
          />
        )}
      </Flex>
    </div>
  );
};

export default Header;
