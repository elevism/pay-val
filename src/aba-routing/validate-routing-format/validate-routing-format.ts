/**
 * Validate the formatting of a routing number input
 *
 * Must be exactly 9 digits and cannot start with a 5.
 * Does not validate the check digit, only the format.
 */
export const validateRoutingFormat = (routingNumber: string): boolean => {
  return (!!routingNumber && /^[012346789][0-9]{8}$/.test(routingNumber));
};
