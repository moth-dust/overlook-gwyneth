import chai from 'chai';
import { bookings, rooms_1, rooms, rooms_2, bookings_full } from './test-data';

const expect = chai.expect;

describe('See if the tests are running', function() {
    it.skip('should return true', function() {
      expect(true).to.equal(true);
    });
    it.skip('should import test data from the test directory', ()=>{
      expect(Boolean(rooms)).to.equal(true);
      expect(Boolean(bookings)).to.equal(true);
      expect(Boolean(rooms_1)).to.equal(true);
      expect(Boolean(rooms_2)).to.equal(true);
      expect(Boolean(bookings_full)).to.equal(true);
      
    });
  });

describe('filterRoomsByDate()',()=>{
    it.skip('should take array of bookings and a date and return a filtered array rooms excluding matches',()=>{
        const result = filterRoomsByDate(bookings, '2023/11/30');
        expect(result).to.deep.equal(rooms_1);
    });
    it.skip('if a date yields no results, display a message that informs the user the hotel is full that day',()=>{
        const result = filterRoomsByDate(bookings_full, '2022/04/22');
        expect(result).to.equal('Our apologies! No Rooms are availible on that date, please select a different one.');
    });
    it.skip('if no date is given, it should return a prompt to select one',()=>{
        const result = filterRoomsByDate(bookings);
        expect(result).to.equal('Please enter a current or future date.');
    });
    it.skip('if a user enters a past date, this same prompt should be returned',()=>{
        const result = filterRoomsByDate(bookings, "1998/08/03");
        expect(result).to.equal('Please enter a current or future date.');
    });
});

describe('filterRoomsByType()',()=>{
    it.skip('should take in an array of rooms and roomType property and return a filtered array of matches',()=>{
        const result = filterRoomsByType(rooms, 'single room');
        expect(result).to.deep.equal(rooms_2);
    });
    it.skip('should return back the same array if no type is specified',()=>{
        const result = filterRoomsByType(rooms);
        expect(result).to.deep.equal(rooms);
    });
    it.skip('should handle the expected typeError if the user invokes this function without successful date search results',()=>{
        const result = filterRoomsByDate(bookings);
        const newResult = filterRoomsByType(result);
        expect(newResult).to.equal(result);
    });
    it.skip('should return back a message explaining no matches were found if this is the case',()=>{
        const result = filterRoomsByType(rooms, 'evil room');
        expect(result).to.equal('Our apologies! No rooms were found under the required specifications. Please try adjusting one or more of your search criteria.');
    });
})