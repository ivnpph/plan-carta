
import { useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { PricingCard } from "../components/pricing/PricingCard";
import { BillingToggle } from "../components/pricing/BillingToggle";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const MONTHLY_PRICES = {
  essential: 12,
  premium: 24,
  enterprise: 49,
};

const ANNUAL_DISCOUNT = 0.8; // 20% off

const theme = createTheme({
  palette: {
    primary: {
      main: "#005fd7",
      light: "#e6f0ff",
      dark: "#004fb4",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "10px 22px",
        },
      },
    },
  },
});

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const getPriceWithDiscount = (basePrice: number) => {
    return isAnnual ? Math.floor(basePrice * ANNUAL_DISCOUNT) : basePrice;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "grey.50" }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h1" component="h1" gutterBottom>
              Simple, transparent pricing
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Choose the perfect plan for your needs. All plans include a 14-day
              free trial.
            </Typography>
          </Box>

          <BillingToggle onChange={setIsAnnual} />

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <PricingCard
                title="Essential"
                price={getPriceWithDiscount(MONTHLY_PRICES.essential)}
                period={isAnnual ? "year" : "month"}
                description="Perfect for individuals and small teams just getting started"
                features={[
                  "Up to 10 projects",
                  "Basic analytics",
                  "24/7 email support",
                  "2 team members",
                ]}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <PricingCard
                title="Premium"
                price={getPriceWithDiscount(MONTHLY_PRICES.premium)}
                period={isAnnual ? "year" : "month"}
                description="Best for growing teams that need more features and flexibility"
                features={[
                  "Unlimited projects",
                  "Advanced analytics",
                  "Priority support",
                  "10 team members",
                  "Custom integrations",
                ]}
                isPopular
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <PricingCard
                title="Enterprise"
                price={getPriceWithDiscount(MONTHLY_PRICES.enterprise)}
                period={isAnnual ? "year" : "month"}
                description="Advanced features and support for large-scale organizations"
                features={[
                  "Unlimited everything",
                  "Custom analytics",
                  "Dedicated support",
                  "Unlimited team members",
                  "Advanced security",
                  "Custom branding",
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Index;
