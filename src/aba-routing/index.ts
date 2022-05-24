import { validateRoutingFormat } from './validate-routing-format/validate-routing-format';
import { validateCheckDigit } from './validate-check-digit/validate-check-digit';

/**
 * Validate an ABA routing number
 */
export const validateRoutingNumber = (routingNumber: string): boolean => {
  return (
    validateRoutingFormat(routingNumber) &&
    validateCheckDigit(routingNumber)
  );
};
