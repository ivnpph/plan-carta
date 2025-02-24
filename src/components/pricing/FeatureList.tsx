
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface FeatureListProps {
  features: string[];
}

export const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <List sx={{ mt: 2 }}>
      {features.map((feature, index) => (
        <ListItem key={index} sx={{ py: 1 }}>
          <ListItemIcon>
            <CheckIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={feature} />
        </ListItem>
      ))}
    </List>
  );
};
