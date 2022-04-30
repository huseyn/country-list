import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { ICountry } from "types/country";

interface ICountryProps {
  country: ICountry;
}

const Country = ({
  country: { name, region, area, independent },
}: ICountryProps) => {
  return (
    <Card sx={{ minWidth: 275, margin: 3 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant='h5' color='text.secondary'>
          Region: {region}
        </Typography>
        <Typography variant='h6' color='text.secondary' gutterBottom>
          Name: {name}
        </Typography>
        <Typography variant='h6'>Area: {area}</Typography>
        <Typography variant='h6'>
          Independent: {independent ? "Yes" : "No"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Country;
