"use client";
import DonationPlacesCard from "@/components/DonationPlacesCard/DonationPlacesCard";
import RecurrentPaymentPlanCard from "@/components/RecurrentPaymentPlanCard/RecurrentPaymentPlanCard";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Heading,
  ScrollArea,
  Separator,
  TextField,
  Text,
  IconButton,
  Tooltip,
  Select,
} from "@radix-ui/themes";
import React, {
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface PlanProps {
  name: string;
  code: string;
  duration: string;
  frequency: string;
  value: string;
}

interface MyProps {
  originalData: [PlanProps];
  newDataSetter: SetStateAction<PlanProps>;
}

const addNewPlan = (
  locations: Array<PlanProps>,
  setLocations: Dispatch<SetStateAction<Array<PlanProps>>>
) => {
  const emptyProps = {
    name: "",
    code: "",
    duration: "",
    frequency: "",
    value: "",
  };

  const [newPlan, setNewPlan] = useState(emptyProps as PlanProps);

  useEffect(() => {
    setNewPlan(emptyProps);
  }, []);

  function addNewLocation(originalArray: Array<PlanProps>): Array<PlanProps> {
    originalArray.push(newPlan);
    setNewPlan(emptyProps);
    return originalArray;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="1" color="lime" variant="surface">
          <Tooltip content="Adicionar um novo plano">
            <Flex direction="row" gap="1">
              Adicionar
              <Separator orientation="vertical" size="1" />
              <PlusIcon />
            </Flex>
          </Tooltip>
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className="p-5">
        <Dialog.Title>Adicionar Plano de Assinatura Mensalista </Dialog.Title>

        <Separator orientation="horizontal" size="4" />
        <br />
        <Flex direction="column" justify="between" gap="1" align="start">
          <TextField.Root className="w-full">
            <TextField.Slot>
              <Text as="div" size="1" weight="bold" color="lime">
                Nome:
              </Text>
            </TextField.Slot>
            <TextField.Input
              value={newPlan.name}
              onChange={(event) =>
                setNewPlan({ ...newPlan, name: event.target.value })
              }
            />
          </TextField.Root>
          <Box>
            <Flex direction="row" justify="between" align="center" gap="3">
              <TextField.Root className="w-full">
                <TextField.Slot>
                  <Text as="div" size="1" weight="bold" color="lime">
                    Valor:
                  </Text>
                </TextField.Slot>
                <TextField.Input
                  value={newPlan.value}
                  onChange={(event) =>
                    setNewPlan({ ...newPlan, value: event.target.value })
                  }
                />
              </TextField.Root>
              <TextField.Root className="w-full">
                <TextField.Slot>
                  <Text as="div" size="1" weight="bold" color="lime">
                    Duração:
                  </Text>
                </TextField.Slot>
                <TextField.Input
                  value={newPlan.duration}
                  onChange={(event) =>
                    setNewPlan({ ...newPlan, duration: event.target.value })
                  }
                />
              </TextField.Root>

              <Select.Root
                defaultValue={"ND"}
                onValueChange={(value) =>
                  setNewPlan({ ...newPlan, frequency: value })
                }
              >
                Frequência:
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="ND" disabled>
                      selecionar
                    </Select.Item>
                    <Select.Item value="mensal">mensal</Select.Item>
                    <Select.Item value="anual">anual</Select.Item>
                    <Select.Item value="vitalicio">vitalício</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Box>
        </Flex>
        <br />
        <Separator orientation="horizontal" size="4" />
        <br />
        <Flex direction="row" justify="between" gap="5" align="center">
          <Dialog.Close>
            <Button
              color="lime"
              variant="surface"
              onClick={() => addNewLocation(locations)}
            >
              ADICIONAR
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              color="amber"
              variant="surface"
              onClick={() => setNewPlan(emptyProps)}
            >
              VOLTAR
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

let original = [
  {
    name: "10 reais mensais por 1 ano",
    code: "10/1a",
    duration: "1",
    frequency: "anual",
    value: "10.00",
  },
  {
    name: "10 reais mensais por 6 mêses",
    code: "10/6m",
    duration: "6",
    frequency: "mensal",
    value: "10.00",
  },
  {
    name: "5 reais mensais por 6 mêses",
    code: "5/6m",
    duration: "6",
    frequency: "mensal",
    value: "5.50",
  },
];

const RecurrentPaymentPlansCard = () => {
  const [plans, setPlans] = useState(original);

  function deleteLocation(
    originalArray: Array<PlanProps>,
    location: PlanProps
  ): Array<PlanProps> {
    const clone = [...originalArray];

    clone.splice(originalArray.indexOf(location), 1);

    return clone;
  }

  return (
    <Card variant="surface" style={{ height: "100%" }} className="w-1/3">
      <Flex direction="column" justify="between" align="center" gap="3">
        <Flex
          direction="row"
          justify="between"
          gap="5"
          align="center"
          className="w-full"
        >
          <Heading size="4" color="lime">
            Planos de Assinatura Mensalista
          </Heading>
          {addNewPlan(plans, setPlans)}
        </Flex>

        <Separator orientation="horizontal" size="4" />
        <ScrollArea
          type="always"
          scrollbars="vertical"
          style={{ height: "100%", maxHeight: 500 }}
        >
          <Box p="2" pr="8">
            <Flex direction="column" justify="between" gap="1">
              {plans.map((plan) => {
                return (
                  <>
                    <RecurrentPaymentPlanCard
                      name={plan.name}
                      code={plan.code}
                      frequency={plan.frequency}
                      value={plan.value}
                      duration={plan.duration}
                      onClickFunction={() =>
                        setPlans(deleteLocation(plans, plan))
                      }
                    />
                  </>
                );
              })}
            </Flex>
          </Box>
        </ScrollArea>
      </Flex>
    </Card>
  );
};

export default RecurrentPaymentPlansCard;
