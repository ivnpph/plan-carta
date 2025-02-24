
import { Stack, Typography, Switch, Chip } from "@mui/material";
import { useState } from "react";

interface BillingToggleProps {
  onChange: (isAnnual: boolean) => void;
}

export const BillingToggle = ({ onChange }: BillingToggleProps) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    onChange(newValue);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ mb: 4 }}
    >
      <Typography
        variant="body1"
        color={!isAnnual ? "primary" : "text.secondary"}
      >
        Monthly
      </Typography>
      <Switch
        checked={isAnnual}
        onChange={handleToggle}
        color="primary"
      />
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography
          variant="body1"
          color={isAnnual ? "primary" : "text.secondary"}
        >
          Annual
        </Typography>
        <Chip
          label="Save 20%"
          size="small"
          color="primary"
          variant="outlined"
        />
      </Stack>
    </Stack>
  );
};
