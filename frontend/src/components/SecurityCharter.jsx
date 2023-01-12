import React from "react";
import car from "../assets/car.png";

function SecurityCharter() {
  return (
    <div>
      <ul className="m-6">
        <h2 className="mt-6 md:mt-18 text-lg text-[#15133C] md:text-2xl z-0 mb-2">
          How do I proceed ?
        </h2>
        <li>
          <div className="flex">
            <img className="h-6" src={car} alt="car" />
            <p className="ml-2">Before renting</p>
          </div>
          <p>Compare the following points:</p>
          <p>
            Vehicle rental conditions (length of driver’s license, method of
            payment, security deposit, lease advance, fuel charges, etc.); the
            conditions of insurance (of persons and property), amount and
            conditions of redemption of the deductible[1]; the guarantees
            (insurance of persons transported) or exclusions (damage to the
            driver) of the insurance contract, included in the rental service or
            offered as an option (possibility of taking out additional insurance
            for damage to the vehicle caused by the tenant); the contradictory
            state of the vehicle: require that all defects (shock, scratches,
            etc.) of the vehicle be accurately noted on the card before taking
            control of the vehicle.
          </p>
        </li>
        <h2 className="mt-6 md:mt-18 text-lg text-[#15133C] md:text-2xl z-0 mb-2">
          Consumer information
        </h2>
        <li>
          <div className="flex">
            <img className="h-6" src={car} alt="car" />
            <p className="ml-2">
              The professional must, by any means, make available to the
              consumer information concerning the general conditions of the
              rental:
            </p>
          </div>
          <p> Information on prices and conditions of the main service: </p>
          <p>
            Conditions for the delivery of the service, in particular the
            conditions of seniority of the driving licence; methods for
            calculating the price of the main service, in particular the TTC
            unit prices of all the elements of the service (per kilometre, per
            time) and any surcharges applicable at stations and airports; Fuel
            invoicing terms, including flat or unit prices applied; VAT amount
            of the security deposit, conditions for its return and conditions
            for exemption from payment of the deposit; lease advances required,
            amount and conditions of exemption; all other conditions and pricing
            information, including but not limited to cancellation fees and
            conditions and charges and conditions applicable in the event of the
            return of the vehicle beyond the return period or mileage package,
            provided for in the contract; where applicable, the costs for which
            the consumer must provide the advance directly on behalf of the
            professional.
          </p>
        </li>
        <h2 className="mt-6 md:mt-18 text-lg text-[#15133C] md:text-2xl z-0 mb-2">
          Before the conclusion of the contract: submission of the quote
        </h2>
        <li>
          <div className="flex">
            <img className="h-6" src={car} alt="car" />
            <p className="ml-2">
              Before the contract is concluded, the lessor must systematically
              give the consumer a free quote. This estimate must include a
              certain number of mentions.
            </p>
          </div>
          <p> Information to be included in all quotes: </p>
          <p>
            Date of writing of the estimate; name, physical, telephone and
            electronic contact information of the rental company; the main
            characteristics of the rental offer, including its validity period,
            the rental period and the vehicle category; places of delivery and
            return of keys; total price including all taxes to be paid prior to
            taking the vehicle, and its detailed statement, in quantity and
            price including all taxes, for each service, recalling the unit
            prices used. If applicable: TTC amounts to be paid after the return
            of the vehicle, and their detailed statement in quantity and price
            TTC, for each service, recalling, if applicable, the unit prices
            used. If an element of the price is not known, in particular because
            it depends on the use of the vehicle during the rental period, the
            method of calculation of this element is given; the names of the
            packages included in the service and their contents; discounts or
            promotions and their conditions of award. Additional information to
            be included in the quotations for rental offers lasting longer than
            six months: a reminder of the conditions required of the consumer in
            terms of vehicle use, insurance and maintenance; conditions
            governing the liability of the consumer with regard to the cover of
            any damages, as well as the nature and amount of the deductibles
            left to him; the duration of the contract and the terms of early
            termination; arrangements for any revision of the price, in
            particular the automatic or conditional nature of the revision, its
            triggering conditions, the objective parameters allowing the
            calculation of the revised price and the conditions for withdrawal
            from the contract in the event of a revision of the price; a
            statement enabling the consumer to identify the above information as
            the special conditions applicable to rental contracts of more than
            six months' duration.
          </p>
        </li>
        <li>
          <div className="flex mt-2">
            <img className="h-6" src={car} alt="car" />
            <p className="ml-2">
              Before signing the contract: attention must be paid to the
              contradictory detailed state of the vehicle
            </p>
          </div>
          <p>
            If the vehicle is damaged (scratches, shocks, etc.), it is essential
            to check the vehicle before taking possession of it, and to have the
            damage recorded on all the copies of the contract and/or on the
            vehicle’s status sheet. Failure to do so will result in liability
            upon return of the vehicle. The sheet can be integrated into the
            lease agreement or be a separate document. This document establishes
            the condition of the vehicle both on departure and return. It is
            signed by both parties, on departure and return of the vehicle.
          </p>
        </li>
        <li>
          <div className="flex mt-2">
            <img className="h-6" src={car} alt="car" />
            <p className="ml-2">The financial terms</p>
          </div>
          <p>
            The security deposit The security deposit is intended to cover
            damages that may occur during the rental and any additional
            invoicing. The deposit is usually in the amount of the
            non-redeemable deductible. The advance on rental The lease advance
            guarantees the payment of the lease. It is not systematic. In the
            event that the tenant presents his bank card the renter can exempt
            the tenant from paying an advance on rental. With the credit card,
            the lessor does a check by requesting a payment authorization for a
            specified amount. This transaction, which does not have the effect
            of deducting the amount indicated, is a means of verifying the
            creditworthiness of the lessee with regard to the value of the
            vehicle entrusted.
          </p>
        </li>
        <li>
          <h2 className="mt-6 md:mt-18 text-lg text-[#15133C] md:text-2xl z-0 mb-2">
            In case of litigation?
          </h2>
          <div className="flex">
            <img className="h-6" src={car} alt="car" />
            <p className="ml-2">What to do in case of litigation?</p>
          </div>
          <p> As a first step </p>
          <p>
            A «friendly» approach with the competent customer service of your
            lessor is preferred (keep a copy of your claim).
          </p>
          <p> In a second step </p>
          <p>
            Other amicable or judicial steps are possible. You can contact the
            consumer associations in your department who can help find an
            amicable settlement with the professional. The above elements are
            for information purposes only. They are not necessarily exhaustive
            and cannot replace official texts.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SecurityCharter;
