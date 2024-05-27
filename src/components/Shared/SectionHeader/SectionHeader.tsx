import { Box, Container, Typography } from "@mui/material";
import style from "./style.module.css";

const SectionHeader = ({ HeaderTitle }: { HeaderTitle: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
      }}
      className={style.section_header}
    >
      <Container>
        <Typography
          variant="h3"
          component={"h1"}
          color={"white"}
          fontWeight={600}
          className={style.header_title}
        >
          {HeaderTitle}
        </Typography>
        <Typography
          variant="h6"
          component={"p"}
          color={"white"}
          fontWeight={600}
        >
          <Typography
            variant="h6"
            component={"span"}
            color={"primary.main"}
            fontWeight={600}
            ml={2}
          >
            Home |
          </Typography>{" "}
          {HeaderTitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default SectionHeader;
