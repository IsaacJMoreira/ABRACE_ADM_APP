import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Link,
  Separator,
  Text,
  colorProp,
} from "@radix-ui/themes";
import { ValueOf } from "next/dist/shared/lib/constants";
import React, { FC, useState } from "react";
import { ValueType } from "tailwindcss/types/config";

interface AdoptionSubmissionProps {
  userID: string;
  userName: string;
  userAptitude: string;
  submissionDate: string;
  submissionGrant: string;
}

interface GrantBadge {
  [type: string]: {
    grantColor: typeof colorProp.default;
    grantText: string;
  };
}

interface AptitudeBadge {
  [type: string]:{
    aptitudeColor: typeof colorProp.default;
    aptitudeText: string;
  }
}

const grantBadge: GrantBadge = {
  pendente: { grantColor: "amber", grantText: "Pedido Pendente" },
  negado: { grantColor: "tomato", grantText: "Pedido Negado" },
  aceito: { grantColor: "lime", grantText: "Pedido Aceito" },
};

const aptitudeBadge: AptitudeBadge ={
  apto: {aptitudeColor: "lime", aptitudeText: "Apto"},
  inapto: {aptitudeColor: "tomato", aptitudeText: "Inapto"}
}

const AdoptionSubmissionCard: FC<AdoptionSubmissionProps> = (props) => {
  const firstData: AdoptionSubmissionProps = {
    userID: props.submissionDate,
    userName: props.userName,
    userAptitude: props.userAptitude,
    submissionDate: props.submissionDate,
    submissionGrant: props.submissionGrant,
  };
  const [submissionData, setSubmissionData] = useState(firstData);
  const { grantColor, grantText } = grantBadge[submissionData.submissionGrant];
  const { aptitudeColor, aptitudeText}= aptitudeBadge[submissionData.userAptitude]
  return (
    <Card variant="classic">
      <Flex direction="row" justify="between" align="center" gap="1">
        <Box>
          <Flex direction="column" gap="0">
            <Flex direction="row" gap='1'>
              <Link
                size="4"
                weight="medium"
                href={`/user/${submissionData.userID}`}
              >
                {submissionData.userName}
              </Link>
              <Badge color={aptitudeColor}>{aptitudeText}</Badge>
            </Flex>

            <Text as="div">
              pediu para adotar em {submissionData.submissionDate}
            </Text>
          </Flex>
        </Box>
        {}

        <Box>
          <Flex direction="column" align="center" gap="1">
            <Badge color={grantColor}>{grantText}</Badge>
            <Separator orientation="horizontal" size="4" />
            <Flex gap="1">
              <Button
                size="1"
                onClick={() =>
                  setSubmissionData({
                    ...submissionData,
                    submissionGrant: "aceito",
                  })
                }
              >
                PERMITIR
              </Button>
              <Button
                color="tomato"
                size="1"
                onClick={() =>
                  setSubmissionData({
                    ...submissionData,
                    submissionGrant: "negado",
                  })
                }
              >
                NEGAR
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default AdoptionSubmissionCard;
