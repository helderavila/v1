import { Button, ButtonProps } from "@chakra-ui/react";

interface TabButtonProps extends ButtonProps {
  children: string;
}

export function TabButton({ children, ...rest }: TabButtonProps) {
  return (
    <Button
      height="35px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      pl="12px"
      w="120px"
      borderRadius="2px"
      fontSize="14px"
      fontWeight="semibold"
      bg="transparent"
      borderColor="transparent"
      color="gray.400"
      _hover={{ bg: "gray.700" }}
      justifyContent="flex-start"
      _active={{
        bg: "gray.700",
        transform: "scale(0.98)",
        color: "purple.500",
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}