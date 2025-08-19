
export default function decodeBasicAuth(codedAuth: string) {
    const decodedAuth = atob(codedAuth.split(" ")[1]);
    const credentials = decodedAuth.split(":");
    return {
        decodedUsername: credentials[0],
        decodedPassword: credentials[1],
    }
}