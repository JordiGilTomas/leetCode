export default function isMatch(text: string, pattern: string): boolean {
  if (pattern === "") return text === "";

  const firstMatch =
    text !== "" &&
    (pattern.charAt(0) === text.charAt(0) || pattern.charAt(0) === ".");

  if (pattern.length >= 2 && pattern.charAt(1) === "*") {
    return (
      isMatch(text, pattern.substring(2)) ||
      (firstMatch && isMatch(text.substring(1), pattern))
    );
  }
  return firstMatch && isMatch(text.substring(1), pattern.substring(1));
}
