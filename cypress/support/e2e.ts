/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';
import '@cypress/code-coverage/support';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Check if mail recipients are bcc
       * @param mail The sent mail of type Item(cypress-mailhog)
       */
      checkBcc(mail): Chainable<boolean>;

      /**
       * Update chapter using GQL mutation
       * @param chapterId Id of the chapter
       * @param data Data of the chapter. Equivalent of UpdateChapterInputs for the Chapter resolver.
       */
      updateChapter(chapterId: number, data): Chainable<any>;

      /**
       * Confirm rsvp of user with userId for the event with eventId
       * @param eventId Id of the event
       * @param userId Id of the user
       */
      confirmRsvp(eventId: number, userId: number): Chainable<any>;

      /**
       * Delete rsvp of user with userId for the event with eventId
       * @param eventId Id of the event
       * @param userId Id of the user
       */
      deleteRsvp(eventId: number, userId: number): Chainable<any>;

      /**
       * Rsvp to event with eventId and chapterId
       * @param eventId Id of the event
       * @param chapterId Id of the chapter
       * @param {object} [options={ withAuth: boolean }] Optional options object.
       */
      rsvpToEvent(
        { eventId, chapterId }: { eventId: number; chapterId: number },
        options?: { withAuth: boolean },
      ): Chainable<any>;

      /**
       * Subscribe to notifications for a single event
       * @param eventId Id of the event
       * @param {object} [options={ withAuth: true }] Optional options object.
       */
      subscribeToEvent(
        { eventId }: { eventId: number },
        options?: { withAuth: boolean },
      ): Chainable<any>;

      /**
       * Unsubscribe from notifications for a single event
       * @param eventId Id of the event
       * @param {object} [options={ withAuth: true }] Optional options object.
       */
      unsubscribeFromEvent(
        { eventId }: { eventId: number },
        options?: { withAuth: boolean },
      ): Chainable<any>;

      /**
       * Create venue using GQL mutation
       * @param chapterId Id of the chapter
       * @param data Data of the venue. Equivalent of CreateVenueInputs for the Venue resolver.
       * @param {object} [options={ withAuth: true }] Optional options object.
       */
      createVenue(
        { chapterId }: { chapterId: number },
        data: any,
        options?: { withAuth: boolean },
      ): Chainable<any>;

      /**
       * Update venue using GQL mutation
       * @param chapterId Id of the chapter
       * @param venueId Id of the venue
       * @param data Data of the venue. Equivalent of UpdateVenueInputs for the Venue resolver.
       * @param {object} [options={ withAuth: true }] Optional options object.
       */
      updateVenue(
        { venueId, chapterId }: { venueId: number; chapterId: number },
        data: any,
        options?: { withAuth: boolean },
      ): Chainable<any>;
    }
  }
}
