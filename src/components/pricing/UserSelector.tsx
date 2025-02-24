
import { IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface UserSelectorProps {
  userCount: number;
  onChange: (count: number) => void;
  min?: number;
  max?: number;
}

export const UserSelector = ({
  userCount,
  onChange,
  min = 1,
  max = 100,
}: UserSelectorProps) => {
  const handleDecrement = () => {
    if (userCount > min) {
      onChange(userCount - 1);
    }
  };

  const handleIncrement = () => {
    if (userCount < max) {
      onChange(userCount + 1);
    }
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 2 }}
    >
      <IconButton
        onClick={handleDecrement}
        disabled={userCount <= min}
        size="small"
      >
        <RemoveIcon />
      </IconButton>
      <Typography variant="h6" sx={{ minWidth: "3ch", textAlign: "center" }}>
        {userCount}
      </Typography>
      <IconButton
        onClick={handleIncrement}
        disabled={userCount >= max}
        size="small"
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
};
