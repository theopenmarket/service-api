import { RegistrationEmailMessage } from '~/models/messages/emails/registration-email.message';
import logger from '@services/logger';

export const registrationEmailMessageConsumer = async (message: RegistrationEmailMessage) => {
  logger.info(JSON.stringify(message));
};
