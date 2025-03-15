export function binarySecurityToken(token: string) {
  return `<BinarySecurityToken EncodingType="Base64Binary" valueType="String">${token}</BinarySecurityToken>`
}