interface MyButtonProps {
    onPress: () => void;
    text: string;
}
declare const MyButton: ({ onPress, text }: MyButtonProps) => JSX.Element;

export { MyButton as default };
