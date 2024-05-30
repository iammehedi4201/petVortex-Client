import { useGetMyProfileQuery } from "@/redux/api/user/userApi";
import { getUserInfo, removeUser } from "@/services/auth.services";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserProfile = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  //:get user Profile
  const { data: profile, isLoading } = useGetMyProfileQuery(undefined);
  const [isUSerMenuOpen, setIsUserMenuOpen] = useState(false); //for profile menu toggle

  const handleOpenUserMenu = () => {
    setIsUserMenuOpen(!isUSerMenuOpen);
  };

  return (
    <>
      <Box>
        {userInfo?.email && (
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{
              display: "flex",
              mx: 2,
              borderColor: "red",
              textDecoration: "none",
              backgroundColor: "gray.800",
              borderRadius: "50%",
              "&:focus": {
                ring: 4,
                ringColor: "gray.300",
                dark: {
                  ringColor: "gray.600",
                },
              },
            }}
          >
            <Box
              component="img"
              src={profile?.data?.profilePicture} // Replace with actual user photo URL
              alt="user"
              sx={{ width: 32, height: 32, borderRadius: "50%" }}
            />
          </IconButton>
        )}

        <Box
          sx={{
            zIndex: 50,
            display: isUSerMenuOpen ? "block" : "none",
            my: 2,
            textAlign: "left",
            bgcolor: "white",
            boxShadow: 1,
            borderRadius: 1,
            position: "absolute",
            top: "2rem",
            transform: "translateY(2rem) translateX(-40%)",
            width: "500px",
            maxWidth: "100%",
            dark: {
              bgcolor: "gray.700",
              color: "white",
            },
          }}
        >
          <Box sx={{ px: 2, py: 1 }}>
            <Typography variant="body2" color="text.primary">
              {profile?.data?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profile?.data?.email}
            </Typography>
          </Box>
          <List>
            <ListItem component="a" href="#">
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem component={Link} href="/addproduct">
              <ListItemText primary="Add Products" />
            </ListItem>
            <ListItem component={Link} href="/myproducts">
              <ListItemText primary="My Products" />
            </ListItem>
            <ListItem>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={async () => {
                  removeUser();
                  router.push("/");
                }}
                sx={{
                  textTransform: "none",
                  background: "linear-gradient(to right, #00c6ff, #0072ff)",
                  "&:hover": {
                    background: "linear-gradient(to left, #00c6ff, #0072ff)",
                  },
                }}
              >
                LogOut
              </Button>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
