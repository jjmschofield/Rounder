import {NightOut} from './nightOut'
import {Product} from './product';
import {BarMock} from './bar.mock';

describe('Shared', () => {
  describe('Models', () => {

    describe('NightOut', () => {

      let underTest:NightOut;

      beforeEach(() => {
        underTest = new NightOut(
          1234,
          5678
        );
      });

      describe('getRoundById', () => {
        it('should get the specified round when given a valid round id', () => {
          //Arrange
          var roundIdA = (underTest.addRound(BarMock[0])).id;
          var roundIdB = (underTest.addRound(BarMock[1])).id;

          //Act
          let responseA = underTest.getRoundById(roundIdA);
          let responseB = underTest.getRoundById(roundIdB);

          //Assert
          expect(responseA.bar).toEqual(BarMock[0]);
          expect(responseB.bar).toEqual(BarMock[1]);
        });

        it('should return null when a given an invalid round id', () => {

          //Arrange
          underTest.addRound(BarMock[0]);

          //Act
          let response = underTest.getRoundById(3204983209483);

          //Assert
          expect(response).toBe(null);

        });
      });

      describe('addRound', () => {

        it('should create a round in when given a bar id', () => {
          //Arrange

          //Act
          let response = underTest.addRound(BarMock[0]);

          //Assert
          expect(response.bar).toEqual(BarMock[0]);
          expect(response.id).toBeGreaterThan(-1);
          expect(underTest.rounds[0]).toBe(response);
        });
      });

      describe('removeRound', () => {
        it('should remove a round when given a valid index', () => {
          //Arrange
          let responseA = underTest.addRound(BarMock[0]);
          let responseB = underTest.addRound(BarMock[1]);
          let responseC = underTest.addRound(BarMock[2]);
          expect(underTest.rounds.length).toEqual(3);

          //Act
          underTest.removeRound(0);

          //Assert
          expect(underTest.rounds.length).toEqual(2);
          expect(underTest.rounds[0]).toBe(responseB);

        });
      });

      describe('getCost', () => {
        it('should return the sum of all rounds when called', () => {

          //Arrange
          let roundA = underTest.addRound(BarMock[0]);
          roundA.addProduct(new Product(1234, 'some product', 2.50, 2));
          roundA.addProduct(new Product(123423, 'some other product', 2.00, 5));

          let roundB = underTest.addRound(BarMock[1]);
          roundB.addProduct(new Product(123465464, 'some other other product', 10.00, 1));

          //Act
          let response = underTest.getCost();

          //Assert
          expect(response).toEqual(25.00);

        });
      });


    });

  });
});
