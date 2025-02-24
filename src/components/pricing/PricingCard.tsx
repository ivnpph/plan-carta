
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { FeatureList } from "./FeatureList";

interface PricingCardProps {
  title: string;
  price: number;
  period: "month" | "year";
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  isPopular,
}: PricingCardProps) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);

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
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 2, minHeight: 48 }}
        >
          {description}
        </Typography>
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
