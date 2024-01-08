import { Box } from "@mui/material";

interface TransactionIconsProps {
  type: string;
  url?: string;
}

export const TransactionIcons: React.FC<TransactionIconsProps> = ({ type, url }) => {
  const iconFileName = type.toLowerCase().replace(/\s/g, "_");
  const iconPath = url ? url : "/src/assets/icons/Transaction/" + iconFileName + "_icon.svg";

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <img loading="lazy" src={iconPath} alt={`${type} icon`} />
    </Box>
  );
};
