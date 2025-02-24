
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { FeatureList } from "./FeatureList";
import { UserSelector } from "./UserSelector";

interface PricingCardProps {
  title: string;
  price: number;
  period: "month" | "year";
  features: string[];
  isPopular?: boolean;
  userCount: number;
  onUserCountChange: (count: number) => void;
}

export const PricingCard = ({
  title,
  price,
  period,
  features,
  isPopular,
  userCount,
  onUserCountChange,
}: PricingCardProps) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price * userCount);

  return (
    <Card
      raised={isPopular}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {isPopular && (
          <Chip
            label="Most Popular"
            color="primary"
            size="small"
            sx={{ position: "absolute", top: 16, right: 16 }}
          />
        )}
        <Typography variant="h5" component="h3" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ mt: 2, mb: 1 }}>
          <Typography variant="h3" component="span">
            {formattedPrice}
          </Typography>
          <Typography variant="subtitle1" component="span" color="text.secondary">
            /{period}
          </Typography>
        </Box>
        <UserSelector userCount={userCount} onChange={onUserCountChange} />
        <FeatureList features={features} />
        <Button
          variant={isPopular ? "contained" : "outlined"}
          color="primary"
          size="large"
          fullWidth
          sx={{ mt: 3 }}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};
