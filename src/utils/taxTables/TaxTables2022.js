const TaxYear = {
   "year":"2022",
   "income":[
      {
         "key":"employment_t4",
         "label":"T4 Employment",
         "description":"Employment income for which you receive a T4. Reported on line 10100 of your tax return, less any amounts included in lines 10105, 10120 or 10130 which should be entered separately.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips/understand-your-tax-slips/t4-slips/t4-statement-remuneration-paid.html",
         "disabled":false
      },
      {
         "key":"exempt_t4",
         "label":"T4 Exempt",
         "description":"Tax-exempt income for emergency services volunteers for which you receive a T4. Reported on line 10105 of your tax return. Note: do not double-count this amount by including it in your T4 employment income! If you enter T4 employment income, deduct this amount first.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips/understand-your-tax-slips/t4-slips/t4-statement-remuneration-paid.html",
         "disabled":false
      },
      {
         "key":"commissions_t4",
         "label":"T4 Commissions",
         "description":"Commission income included in your employment income, for which you receive a T4. Reported on line 10120 of your tax return. Note: do not double-count this amount by including it in your T4 employment income! If you enter T4 employment income, deduct this amount first.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips/understand-your-tax-slips/t4-slips/t4-statement-remuneration-paid.html",
         "disabled":false
      },
      {
         "key":"wage_loss_t4",
         "label":"T4 Wage-loss Replacement",
         "description":"Wage-loss replacement income included in your employment income, for which you receive a T4. Reported on line 10130 of your tax return. Note: do not double-count this amount by including it in your T4 employment income! If you enter T4 employment income, deduct this amount first.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/tax-slips/understand-your-tax-slips/t4-slips/t4-statement-remuneration-paid.html",
         "disabled":false
      },
      {
         "key":"employment_other",
         "label":"Other Employment",
         "description":"Employment income for which you did not receive a T4. Includes some tips, net research grants, etc. Reported on line 10400 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-10400-other-employment-income/line-10400-employment-income-reported-on-a-t4-slip.html",
         "disabled":false
      },
      {
         "key":"self-employment",
         "label":"Self-Employment Business Income",
         "description":"Net self-employment business income. Reported on line 13500 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/self-employment-income-lines-13499-14299-gross-income-lines-13500-14300-net-income.html",
         "disabled":false
      },
      {
         "key":"self-employment_professional",
         "label":"Self-Employment Professional Income",
         "description":"Net self-employment professional income. Reported on line 13700 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/self-employment-income-lines-13499-14299-gross-income-lines-13500-14300-net-income.html",
         "disabled":false
      },
      {
         "key":"self-employment_commission",
         "label":"Self-Employment Commission Income",
         "description":"Net self-employment commission income. Reported on line 13900 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/self-employment-income-lines-13499-14299-gross-income-lines-13500-14300-net-income.html",
         "disabled":false
      },
      {
         "key":"self-employment_farming",
         "label":"Self-Employment Farming Income",
         "description":"Net self-employment farming income. Reported on line 14100 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/self-employment-income-lines-13499-14299-gross-income-lines-13500-14300-net-income.html",
         "disabled":false
      },
      {
         "key":"self-employment_fishing",
         "label":"Self-Employment Fishing Income",
         "description":"Net self-employment fishing income. Reported on line 14300 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/self-employment-income-lines-13499-14299-gross-income-lines-13500-14300-net-income.html",
         "disabled":false
      },
      {
         "key":"employment_insurance",
         "label":"Employment Insurance (EI)",
         "description":"Employment insurance benefits. Reported on lines 11900-11905 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-11900-employment-insurance-other-benefits.html",
         "disabled":false
      },
      {
         "key":"eligible_dividends",
         "label":"Eligible Dividends (Actual)",
         "description":"Actual amount of eligible dividends received from Canadian-Controlled Private Corporations (CCPC dividends). **NOTE that the taxable amount of dividends shown on line 12000 of the T1 will be different than actual dividends received. The calculator will automatically determine the taxable amount and apply a gross-up for tax calculation purposes, but will use the actual amount to calculate guideline income for support purposes. If you do not know the actual dividends received, change this income type to \"Eligible Dividends (Taxable)\" and enter the taxable amount from Line 12000 (deduct any non-eligible dividends reported on Line 12010 from this amount). Please let us know if you have any questions!",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12000-taxable-amount-dividends-eligible-other-than-eligible-taxable-canadian-corporations.html",
         "disabled":null
      },
      {
         "key":"non-eligible_dividends",
         "label":"Non-Eligible Dividends (Actual)",
         "description":"Actual amount of dividends received from Canadian corporations that are not Canadian Controlled Private Corporations (non-CCPC Canadian dividends). **NOTE that the taxable amount of dividends shown on line 12010 of the T1 will be different than actual dividends received. The calculator will automatically determine the taxable amount and apply a gross-up for tax calculation purposes, but will use the actual amount to calculate guideline income for support purposes. If you do not know the actual dividends received, change this income type to \"Non-Eligible Dividends (Taxable)\" and enter the taxable amount from Line 12010 of the return. Please let us know if you have any questions!",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12000-taxable-amount-dividends-eligible-other-than-eligible-taxable-canadian-corporations.html",
         "disabled":false
      },
      {
         "key":"eligible_dividends_taxable",
         "label":"Eligible Dividends (Taxable)",
         "description":"Taxable amount of eligible dividends from Canadian-Controlled Private Corporations (CCPC dividends). Reported on line 12000 of the return (deduct any non-eligible dividends reported on line 12010 from this amount). **NOTE that the taxable amount of dividends shown on the return will be different than actual dividends received. As guideline income is calculated using the actual amount of dividends received, the calculator will automatically determine the actual amount of dividends received based on the taxable amount you enter here, and apply a guideline income adjustment to reflect the actual amount. You will see this adjustment after you calculate support. Alternatively, if you know the actual dividends received, change this income type to \"Eligible Dividends (Actual)\" and enter the actual amount of dividends received instead of the taxable amount. Please let us know if you have any questions!",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12000-taxable-amount-dividends-eligible-other-than-eligible-taxable-canadian-corporations.html",
         "disabled":null
      },
      {
         "key":"non-eligible_dividends_taxable",
         "label":"Non-Eligible Dividends (Taxable)",
         "description":"Taxable amount of dividends from Canadian corporations that are not Canadian Controlled Private Corporations (non-CCPC Canadian dividends). Reported on line 12010 of the return. **NOTE that the taxable amount of dividends shown on line 12010 of the return may be different than actual dividends received. As guideline income is calculated using the actual amount of dividends received, the calculator will automatically determine the actual amount of dividends received based on the taxable amount you enter here, and apply a guideline income adjustment to reflect the actual amount. You will see this adjustment after you calculate support. Alternatively, if you know the actual dividends received, change this income type to \"Non-Eligible Dividends (Actual)\" and enter the actual amount of dividends received instead of the taxable amount. Please let us know if you have any questions!",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12000-taxable-amount-dividends-eligible-other-than-eligible-taxable-canadian-corporations.html",
         "disabled":false
      },
      {
         "key":"eligible_pension",
         "label":"CPP/QPP Benefits (Eligible)",
         "description":"CPP or QPP benefits, or other pensions or superannuation eligible for Pension Tax Credit. Reported on line 11400 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html",
         "disabled":false
      },
      {
         "key":"noneligible_pension",
         "label":"Pension (Non-Eligible)",
         "description":"Other pensions or superannuation not eligible for Pension Tax Credit. Reported on line 11500 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html",
         "disabled":false
      },
      {
         "key":"split-pension",
         "label":"Split-Pension",
         "description":"Elected split-pension amount. Reported on line 11600 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-11600-elected-split-pension-amount.html",
         "disabled":false
      },
      {
         "key":"foreign_dividends",
         "label":"Foreign Interest & Dividends",
         "description":"Taxable amount of interest & dividends from foreign sources. Reported on line 12100 of your tax return. You will need to manually claim any related credits or deductions for foreign withholding tax on these amounts.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12100-interest-other-investment-income/line-12100-foreign-interest-dividends.html",
         "disabled":false
      },
      {
         "key":"interest_investment_income",
         "label":"Interest & Other Investments",
         "description":"Interest and other investment income. Reported on line 12100 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12100-interest-other-investment-income.html",
         "disabled":false
      },
      {
         "key":"net_partnership_income",
         "label":"Net Partnership",
         "description":"Net partnership income: limited or non-active partners only. Reported on line 12200 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12200-net-partnership-income-limited-non-active-partners-only.html",
         "disabled":false
      },
      {
         "key":"net_rental_income",
         "label":"Net Rental Income",
         "description":"Net income from rental property. Reported on line 12600 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/rental-income-line-12599-gross-line-12600-net.html",
         "disabled":false
      },
      {
         "key":"capital_gains",
         "label":"Capital Gains",
         "description":"The taxable (50% of actual) amount of capital gains income. Reported on line 12700 of your tax return. If capital gains income is added, a guideline income adjustment will automatically be applied to include the actual amount of capital gains. Please contact us if you have questions!",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-127-capital-gains.html",
         "disabled":false
      },
      {
         "key":"support_payments_received",
         "label":"Support Payments Received",
         "description":"Spousal support payments received from a prior relationship. Reported on line 12800 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/lines-12799-12800-support-payments-received.html",
         "disabled":false
      },
      {
         "key":"registered_retirement_savings_plan",
         "label":"RRSP",
         "description":"Registered retirement savings plan (RRSP) income. Reported on line 12900 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-129-registered-retirement-savings-plan-rrsp-income.html",
         "disabled":false
      },
      {
         "key":"registered_disability_savings_plan",
         "label":"Registered Disability Savings Plan",
         "description":"Registered disability savings plan income. Reported on line 12500 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-125-registered-disability-savings-plan-rdsp-income.html",
         "disabled":false
      },
      {
         "key":"workers_compensation",
         "label":"Workers' Compensation Benefits",
         "description":"WCB income received. Reported on line 14400 of your tax return. **As this income is tax deductible, consider entering as 'net income' instead, in order to automatically calculate the equivalent amount of employment income for guideline income purposes.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-144-workers-compensation-benefits.html",
         "disabled":false
      },
      {
         "key":"social_benefits",
         "label":"Social Assistance",
         "description":"Social assistance benefits income received. Reported on line 14500 of your tax return. **As this income is tax deductible, consider entering as 'net income' instead, in order to automatically calculate the equivalent amount of employment income for guideline income purposes.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-145-social-assistance-payments.html",
         "disabled":false
      },
      {
         "key":"net_federal_supplements",
         "label":"Net Federal Supplements",
         "description":"Net federal supplements including GIS shown on T4A (OAS) slip. Reported on line 14600 of your tax return. **As this income is tax deductible, consider entering as 'net income' instead, in order to automatically calculate the equivalent amount of employment income for guideline income purposes.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-14600-net-federal-supplements.html",
         "disabled":false
      },
      {
         "key":"old_age_security",
         "label":"Old Age Security",
         "description":"OAS income received from Federal Government. Reported on line 11300 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-11300-old-security-pension-oas.html",
         "disabled":false
      },
      {
         "key":"universal_child_care_benefit",
         "label":"Universal Child Care Benefit",
         "description":"UCCB Child Benefit. Reported on line 11700 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-11700-universal-child-care-benefit-uccb.html",
         "disabled":false
      },
      {
         "key":"taxable_scholarship",
         "label":"Scholarships & Grants",
         "description":"Taxable scholarship, fellowships, bursaries and artists' project grants. Reported on line 13010 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-13000-other-income/line-13010-scholarships-fellowships-bursaries-artists-project-grants-awards.html",
         "disabled":false
      },
      {
         "key":"other",
         "label":"Other Income",
         "description":"Income from other sources not listed. Reported on line 13000 of your tax return.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-13000-other-income.html",
         "disabled":false
      },
      {
         "key":"net_income",
         "label":"Net Income",
         "description":"Enter total income net of any taxes paid, to automatically calculate a gross-up amount equivalent to Canadian pre-tax employment income, which will automatically be calculated and added to guideline income. The net income approach is typically used to calculate support using net foreign income.",
         "reference":"https://www.justice.gc.ca/eng/rp-pr/fl-lf/spousal-epoux/calc/2.html",
         "disabled":false
      },
      {
         "key":"eligible_dividend_gross_up",
         "label":"Eligible Dividend Gross-Up (Auto)",
         "description":"Gross-up for eligible dividend income.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html",
         "disabled":true
      },
      {
         "key":"other_dividend_gross_up",
         "label":"Other Dividend Gross-Up (Auto)",
         "description":"Gross-up for other (non-eligible) dividend income.",
         "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html",
         "disabled":true
      },
      {
         "key":"net_income_gross_up",
         "label":"Income Gross-Up (Auto)",
         "description":"Gross-up for net income, e.g. foreign source income, equivalent to pre-tax Canadian income, automatically calculated and added to guideline income for support calculation purposes.",
         "reference":"https://www.justice.gc.ca/eng/rp-pr/fl-lf/spousal-epoux/calc/2.html",
         "disabled":true
      }
   ],
   "adjustments":[
      {
         "key":"employment_expenses",
         "label":"Deduct Employment Expenses (s. 1)",
         "description":"Section 1 of Schedule III to the Child Support Guidelines provides for the deduction of certain eligible employment expenses.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":"negative"
      },
      {
         "key":"unrelated_social_assistance",
         "label":"Deduct Social Assistance Income (s. 4)",
         "description":"Section 4 of Schedule III to the Child Support Guidelines provides that any amount of social assistance income received by this party that is not attributable to this party should be deducted from Guideline Income.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":"negative"
      },
      {
         "key":"capital_gains",
         "label":"Add-back Actual Capital Gains (s. 6)",
         "description":"Section 6 of Schedule III to the Child Support Guidelines provides that the actual amount of capital gains be used in Guideline Income for support purposes. Only 50% of capital gains are included in taxable income, so this adjustment is necessary to ensure the full value of actual capital gains is used to calculate support.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "disabled":true
      },
      {
         "key":"recurring_business_losses",
         "label":"Deduct Recurring Business Losses (s. 7)",
         "description":"Section 7 of Schedule III to the Child Support Guidelines provides that the actual amount of recurring business losses may be deducted from Guideline Income for support purposes, provided they are recurring (see section 17(2) of the Child Support Guidelines).",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":"negative"
      },
      {
         "key":"carrying_charges",
         "label":"Carrying Charges (s. 8)",
         "description":"Section 8 of Schedule III to the Child Support Guidelines provides for the deduction of \"the spouse’s carrying charges and interest expenses that are paid by the spouse and that would be deductible under the Income Tax Act.\"",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":null
      },
      {
         "key":"add_business_deductions",
         "label":"Add-back Non-Arms Length Business Deductions (s. 9)",
         "description":"Section 9 of Schedule III to the Child Support Guidelines provides that where the spouse’s net self-employment income is determined by deducting an amount for salaries, benefits, wages or management fees, or other payments, paid to or on behalf of persons with whom the spouse does not deal at arm’s length, include that amount, unless the spouse establishes that the payments were necessary to earn the self-employment income and were reasonable in the circumstances.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":null
      },
      {
         "key":"additional_amount",
         "label":"Deduct Additional Amount (s. 10)",
         "description":"Section 10 of Schedule III to the Child Support Guidelines provides that \"where the spouse reports income from self-employment that, in accordance with sections 34.1 and 34.2 of the Income Tax Act, includes an additional amount earned in a prior period, deduct the amount earned in the prior period, net of reserves.\"",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":"negative"
      },
      {
         "key":"capital_cost_amount",
         "label":"Deduct Capital Cost Amount (s. 11)",
         "description":"Section 11 of Schedule III to the Child Support Guidelines provides for the inclusion of \"the spouse’s deduction for an allowable capital cost allowance with respect to real property.\"",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":"negative"
      },
      {
         "key":"capitalization",
         "label":"Deduct Capitalization (s. 12)",
         "description":"Section 12 of Schedule III to the Child Support Guidelines provides that \"where the spouse earns income through a partnership or sole proprietorship, deduct any amount included in income that is properly required by the partnership or sole proprietorship for purposes of capitalization.\"",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":"negative"
      },
      {
         "key":"employee_stock_options",
         "label":"Add Stock Options (s. 13)",
         "description":"Section 13(1) of Schedule III to the Child Support Guidelines provides for adding the value of stock options exercised during the year, determined as \"the difference between the value of the shares at the time the options are exercised and the amount paid by the spouse for the shares, plus any amount paid by the spouse to acquire the options to purchase the shares\".",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":null
      },
      {
         "key":"deduct_employee_stock_options",
         "label":"Deduction for Disposal of Shares (s. 13(2))",
         "description":"Section 13(2) of Schedule III to the Child Support Guidelines provides for deducting the value of stock options determined under section 13 for shares disposed of during a year.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":"negative"
      },
      {
         "key":"split_pension",
         "label":"Deduct Split-Pension Amount (s. 14)",
         "description":"Section 14 of Schedule III to the Child Support Guidelines provides for deducting a split pension amount if a spouse is deemed to have received a split pension amount that is included in total income in the T1 General form.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":"negative"
      },
      {
         "key":"corporate_income",
         "label":"Add Corporate Income (s. 18)",
         "description":"Section 18 of the Child Support Guidelines provides that all or part of the pre-tax income of the corporation, or an amount commensurate with the services that the spouse provides to the corporation, may be included \"[w]here a spouse is a shareholder, director or officer of a corporation and the court is of the opinion that the amount of the spouse's annual income as determined under section 16 does not fairly reflect all the money available to the spouse for the payment of child support\".",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":null
      },
      {
         "key":"imputed_income",
         "label":"Add Imputed Income (s. 19)",
         "description":"Section 19 of the Child Support Guidelines provides that income may be imputed to a spouse under appropriate circumstances including the specific circumstances listed in section 19 of the Guidelines.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":null
      },
      {
         "key":"add_income",
         "label":"Add Income",
         "description":"Manually add non-taxable income to Guideline Income for the purpose of calculating support.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":null
      },
      {
         "key":"deduct_income",
         "label":"Deduct Income",
         "description":"Manually deduct taxable income from Guideline Income for the purpose of calculating support.",
         "sign":"negative",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
      },
      {
         "key":"add_income_ss",
         "label":"Add Income (SS)",
         "description":"Manually add non-taxable income to Spousal Support Guideline Income for the purpose of calculating spousal support. The adjustment will not be applied to child support guideline income.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":null,
         "child_support":false,
      },
      {
         "key":"deduct_income_ss",
         "label":"Deduct Income (SS)",
         "description":"Manually deduct taxable income from Spousal Support Guideline Income for the purpose of calculating spousal support. The adjustment will not be applied to child support guideline income.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":"negative",
         "child_support":false,
      },
      {
         "key":"add_income_cs",
         "label":"Add Income (CS)",
         "description":"Manually add non-taxable income to Child Support Guideline Income for the purpose of calculating child support. The adjustment will not be applied to spousal support guideline income.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "sign":null,
         "spousal_support":false,
      },
      {
         "key":"deduct_income_cs",
         "label":"Deduct Income (CS)",
         "description":"Manually deduct taxable income from Child Support Guideline Income for the purpose of calculating child support. The adjustment will not be applied to spousal support guideline income.",
         "sign":"negative",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "spousal_support":false,
      },
      {
         "key":"deduct_child_support_cs_ss_auto",
         "label":"Deduct Other Relationship Child Support (CS & SS)",
         "description":"Automatically calculate and deduct actual or notional child support obligations for dependent children of other relationships from guideline income.",
         "sign":"negative",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "disabled":true,
      },
      {
         "key":"deduct_child_support_ss_only_auto",
         "label":"Deduct Other Relationship Child Support (SS Only)",
         "description":"Automatically calculate and deduct actual or notional child support obligations for dependent children of other relationships from spousal support guideline income. This adjustment is not applied to child support guideline income.",
         "sign":"negative",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "disabled":true,
      },
      {
         "key":"deduct_eligible_dividend_gross_up",
         "label":"Deduct Eligible Dividend Gross-Up (s. 5)",
         "description":"Section 5 of Schedule III to the Child Support Guidelines requires the actual amount of dividends be used instead of the taxable amount. This adjustment automatically deducts the gross-up for taxable eligible dividend income from guideline income, so that support is calculated using the actual amount of dividends received. **NOTE this adjustment has automatically been added because this person has entered the taxable amount of eligible dividends as income, instead of the actual amount of dividends received. To remove this adjustment, enter the actual amount of dividend income and change the income type to \"Eligible Dividends (Actual)\". Let us know if you have any questions!",
         "sign":"negative",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "disabled":true,
      },
      {
         "key":"deduct_other_dividend_gross_up",
         "label":"Deduct Other Dividend Gross-Up (s. 5)",
         "description":"Section 5 of Schedule III to the Child Support Guidelines requires the actual amount of dividends be used instead of the taxable amount. This adjustment automatically deducts the gross-up for taxable other (non-eligible) dividend income, so that support is calculated using the actual amount of dividends received.  **NOTE this adjustment has automatically been added because this person has entered the taxable amount of non-eligible dividends as income, instead of the actual amount of dividends received. To remove this adjustment, enter the actual amount of dividend income and change the income type to \"Non-Eligible Dividends (Actual)\". Let us know if you have any questions!",
         "sign":"negative",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "disabled":true,
      },
      {
         "key":"dividend_cap_gains_tax_savings",
         "label":"Tax Savings on Dividends and Capital Gains (s. 9(h))",
         "description":"Section 9(h) of the Child Support Guidelines provides for the addition of tax savings on dividend and capital gains income where that income is a substantial portion of a party's income",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "disabled":true,
         "spousal_support":false,
      },
      {
         "key":"tax_savings_gross_up",
         "label":"Gross-Up of Tax Savings (Auto)",
         "description":"Gross-up of tax savings on dividends and capital gains income, per s. 19 of the Child Support Guidelines. Automatically calculated for significant dividend and capital gains income.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/FullText.html",
         "disabled":true,
         "spousal_support":false,
      },
   ],
   "hardship":[
      {
         "key":"high_debts",
         "label":"Unusually High Debts",
         "description":"Unusually high debts from supporting the family before the parents separated or resulting from earning a living.",
         "reference":""
      },
      {
         "key":"high_access_expenses",
         "label":"Unusually High Access Expenses",
         "description":"Unusually high expenses associated with access to a child.",
         "reference":""
      },
      {
         "key":"other_spousal_support",
         "label":"Other Spousal Support",
         "description":"Other spousal support paid where a person has a legal duty under a judgment or order to support another individual.",
         "reference":""
      },
      {
         "key":"other_child_support",
         "label":"Other Child Support",
         "description":"Other child support paid where a person has a legal duty to support a child, other than the child of the marriage, who is under the age of majority or who, owing to illness, disability, or other cause (including education), cannot support himself or herself.",
         "reference":""
      },
      {
         "key":"disability_support",
         "label":"Support for a Disabled Person",
         "description":"Support costs incurred where a person has a legal duty to support a person who cannot get the necessaries of life due to illness or disability.",
         "reference":""
      }
   ],
   "child_expenses":[
      {
         "key":"education",
         "label":"Education",
         "description":"Education expenses (private schooling, tutoring, etc.)",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/section-7.html"
      },
      {
         "key":"child_care",
         "label":"Child Care",
         "description":"Child care (day care, nanny, after school, etc.), tax deductible up to applicable limits.",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/section-7.html"
      },
      {
         "key":"tuition",
         "label":"Post-Secondary Tuition",
         "description":"Post-secondary tuition (tax deductible)",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/section-7.html"
      },
      {
         "key":"medical",
         "label":"Deductible Medical Expenses",
         "description":"Medical and health related expenses that are tax-deductible",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/section-7.html"
      },
      {
         "key":"insurance",
         "label":"Child's Share of Health Insurance",
         "description":"Child's share of health or medical insurance",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/section-7.html"
      },
      {
         "key":"non_deductible_medical",
         "label":"Non-deductible Medical/Health",
         "description":"Other non-tax deductible medical or health-related expenses",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/section-7.html"
      },
      {
         "key":"physical_recreation",
         "label":"Physical Recreation",
         "description":"Physical recreation expenses (sports, camps, etc.)",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/section-7.html"
      },
      {
         "key":"other",
         "label":"Other Expenses",
         "description":"Other special expenses not in another category",
         "reference":"https://laws.justice.gc.ca/eng/regulations/SOR-97-175/section-7.html"
      }
   ],
   "federal":{
      "taxAdjustments":[
         {
            "key":"alternative_minimum_tax",
            "label":"Alternative Minimum Tax",
            "description":"Additional tax for the alternative minimum tax.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/t691/t691-19e.pdf"
         },
         {
            "key":"refundable_quebec_abatement",
            "label":"Refundable Quebec Abatement",
            "description":"Abatement of federal tax for Quebec residents.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-44000-refundable-quebec-abatement.html"
         },
      ],
      "deductions":[
         {
            "key":"split_pension",
            "label":"Split Pension",
            "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
         },
         {
            "key":"dues",
            "label":"Union or Professional Dues",
            "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
         },
         {
            "key":"child_care_expenses",
            "label":"Child Care Expenses",
            "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
         },
         {
            "key":"child_care_expenses_s7",
            "label":"Child Care Expenses (s. 7)",
            "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
         },
         {
            "key":"disability_supports",
            "label":"Disability Supports",
            "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
         },
         {
            "key":"business_investment_loss",
            "label":"Business Investment Loss",
            "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
         },
         {
            "key":"moving_expenses",
            "label":"Moving Expenses",
            "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
         },
         {
            "key":"support_payments_made",
            "label":"Support Payments Made",
            "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
         },
         {
            "key":"carrying_charges",
            "label":"Carrying Charges / Interest",
            "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
         },
         {
            "key":"cpp_qpp_self_employment",
            "label":"CPP/QPP on Self-Employment",
            "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
         },
         {
            "key":"exploration_development",
            "label":"Exploration & Development",
            "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
         },
         {
            "key":"other_employment_expenses",
            "label":"Other Employment Expenses",
            "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
         },
         {
            "key":"clergy_residence",
            "label":"Clergy Residence Deduction",
            "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
         },
         {
            "key":"other",
            "label":"Other Deductions",
            "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
         },
         {
            "key":"canadian_forces_police",
            "label":"Canadian Forces & Police",
            "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
         },
         {
            "key":"employee_home_relocation_loan",
            "label":"Employee Home Relocation Loan",
            "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
         },
         {
            "key":"security_options",
            "label":"Security Options",
            "description":"Security options deduction. Claimed on line 24900 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
         },
         {
            "key":"other_payments",
            "label":"Other Payments",
            "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
            "fields":[
               {
                  "name":"wcb_income"
               },
               {
                  "name":"social_assistance_income"
               },
               {
                  "name":"net_federal_supplements"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
         },
         {
            "key":"limited_partnership_losses_other_years",
            "label":"Other Deductions",
            "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
         },
         {
            "key":"non-capital_losses_other_years",
            "label":"Other Deductions",
            "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
         },
         {
            "key":"net_capital_losses_other_years",
            "label":"Net Capital Losses (other years)",
            "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
         },
         {
            "key":"capital_gains",
            "label":"Capital Gains",
            "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
            "fields":[
               {
                  "name":"capital_gains_income"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
         },
         {
            "key":"cpp_qpp_enhanced",
            "label":"Enhanced CPP or QPP",
            "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
            "fields":[
               {
                  "name":"cpp_qpp_enhanced"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
         },
         {
            "key":"cpp_qpp_self",
            "label":"Self-Employed CPP or QPP",
            "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
            "fields":[
               {
                  "name":"cpp_qpp_self"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
         },
         {
            "key":"northern_residents",
            "label":"Northern Residents Deduction",
            "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
            "fields":[
               {
                  "name":"basic_residency"
               },
               {
                  "name":"basic_travel"
               },
               {
                  "name":"basic_lodging"
               },
               {
                  "name":"intermediate_residency"
               },
               {
                  "name":"intermediate_travel"
               },
               {
                  "name":"intermediate_lodging"
               }
            ],
            "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/t2222/t2222-19e.pdf"
         },
         {
            "key":"additional_deductions",
            "label":"Additional Deductions",
            "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
         },
         {
            "key":"uccb_repayment",
            "label":"UCCB Repayment",
            "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
            "fields":[
               {
                  "name":"amount"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
         }
      ],
      "credits":[
         {
            "key":"basic_personal_amount",
            "label":"Basic Personal Amount",
            "description":"Basic personal amount. Claimed on line 3000 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               },
               {
                  "name":"base_credit_no_expenses"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30000-basic-personal-amount.html"
         },
         {
            "key":"age_amount",
            "label":"Age Amount",
            "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 30100 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               },
               {
                  "name":"base_credit_no_expenses"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30100-amount.html"
         },
         {
            "key":"spouse_partner",
            "label":"Spouse or Partner",
            "description":"Spouse or common-law partner amount. Claimed on line 30300 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               },
               {
                  "name":"base_credit_no_expenses"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30300-spouse-common-law-partner-amount.html"
         },
         {
            "key":"eligible_dependant",
            "label":"Eligible Dependant",
            "description":"Amount for an eligible dependant. Claimed on line 30400 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               },
               {
                  "name":"base_credit_no_expenses"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30400-amount-eligible-dependant.html"
         },
         {
            "key":"ca_children",
            "label":"Caregiver for Infirm Children",
            "description":"Canada caregiver amount for infirm children under 18 years of age. Claimed on line 30500 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               },
               {
                  "name":"base_credit_no_expenses"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30499-30500-canada-caregiver-infirm-children-under-18-years.html"
         },
         {
            "key":"caregiver_adult",
            "label":"Caregiver for Adult",
            "description":"Canada caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 30425 or 30450 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               },
               {
                  "name":"base_credit_no_expenses"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30425-caregiver-spouse-dependant.html"
         },
         {
            "key":"cpp_qpp",
            "label":"CPP or QPP",
            "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
         },
         {
            "key":"ei_premiums",
            "label":"EI Premiums",
            "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
         },
         {
            "key":"qpip_premiums",
            "label":"QPIP Premiums",
            "description":"Credit for Quebec prescription insurance plan premiums. Claimed on line 31200 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
         },
         {
            "key":"volunteer_firefighters",
            "label":"Volunteer Firefighters",
            "description":"Volunteer firefighters' amount. Claimed on line 31220 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31220-volunteer-firefighters-amount-line-31240-search-rescue-volunteers-amount.html"
         },
         {
            "key":"search_and_rescue",
            "label":"Search and Rescue",
            "description":"Search and rescue volunteers' amount. Claimed on line 31240 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31220-volunteer-firefighters-amount-line-31240-search-rescue-volunteers-amount.html"
         },
         {
            "key":"canada_employment",
            "label":"Canada Employment",
            "description":"Canada employment amount. Claimed on line 31260 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31260-canada-employment-amount.html"
         },
         {
            "key":"home_accessibility",
            "label":"Home Accessibility Expenses",
            "description":"Credit for home accessibility expenses. Claimed on line 31285 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html"
         },
         {
            "key":"home_buyers",
            "label":"Home Buyer's Amount",
            "description":"Home buyers' amount. Claimed on line 31270 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31270-home-buyers-amount.html"
         },
         {
            "key":"adoption",
            "label":"Adoption Expenses",
            "description":"Credit for adoption expenses. Claimed on line 31300 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31300-adoption-expenses.html"
         },
         {
            "key":"pension_income",
            "label":"Pension Income",
            "description":"Pension income amount. Claimed on line 31400 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
         },
         {
            "key":"disability_amount_self",
            "label":"Disability Amount (Self)",
            "description":"Disability amount (for taxpayer). Claimed on line 31600 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/what-when-someone-died/final-return/complete-final-return-steps/common-types-income-a-final-return/federal-non-refundable-tax-credits/line-31600-disability-amount-self.html"
         },
         {
            "key":"disability_amount_dependant",
            "label":"Disability Amount (Dependant)",
            "description":"Disability amount (transferred from dependant). Claimed on line 31800 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               },
               {
                  "name":"base_credit_no_expenses"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/what-when-someone-died/final-return/complete-final-return-steps/common-types-income-a-final-return/federal-non-refundable-tax-credits/line-31800-disability-amount-transferred-a-dependant.html"
         },
         {
            "key":"student_loans",
            "label":"Student Loans",
            "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
         },
         {
            "key":"tuition_self",
            "label":"Tuition, Education (self)",
            "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
         },
         {
            "key":"tuition_child",
            "label":"Tuition, Education (dependant)",
            "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
         },
         {
            "key":"tuition_child_s7",
            "label":"Tuition, Education (s.7)",
            "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
         },
         {
            "key":"transfer",
            "label":"Transferred from Spouse",
            "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
         },
         {
            "key":"medical",
            "label":"Medical Expenses",
            "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return.html"
         },
         {
            "key":"medical_expenses_s7",
            "label":"Medical Expenses (s.7)",
            "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return.html"
         },
         {
            "key":"donations_gifts",
            "label":"Donations & Gifts",
            "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
         },
         {
            "key":"other_credits",
            "label":"Other Credits",
            "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
         },
         {
            "key":"canada_workers_benefit",
            "label":"Canada Workers Benefit",
            "description":"Refundable tax credit for low income individuals and families, starting July 2019.",
            "fields":[
               {
                  "name":"base_credit"
               },
               {
                  "name":"base_credit_no_expenses"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-workers-benefit.html"
         },
         {
            "key":"climate_action_incentive",
            "label":"Climate Action Incentive",
            "description":"The climate action incentive (CAI) payment consists of a basic amount and a 10\\% supplement for residents of small and rural communities. Claimed on line 45110 of your tax return.",
            "fields":[
               {
                  "name":"rural_supplement"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-45110-climate-action-incentive.html#Overview"
         },
         {
            "key":"federal_dividend_eligible",
            "label":"Dividend Credit (Eligible Dividends)",
            "description":"Federal dividend tax credit. Claimed on line 40425 of your tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40425-federal-dividend-tax-credit.html"
         },
         {
            "key":"federal_dividend_noneligible",
            "label":"Dividend Credit (Other Dividends)",
            "description":"Federal dividend tax credit. Claimed on line 40425 of your Federal tax return.",
            "fields":[
               {
                  "name":"base_credit"
               }
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-40425-federal-dividend-tax-credit.html"
         }
      ],
      "benefits":[
         {
            "key":"canada_child_benefit",
            "label":"Canada Child Benefit",
            "description":"Monthly benefit paid to assist families with the cost of raising children.",
            "fields":[
               
            ],
            "reference":"https://www.canada.ca/en/employment-social-development/campaigns/canada-child-benefit.html"
         },
         {
            "key":"canada_child_disability_benefit",
            "label":"Canada Child Disability Benefit",
            "description":"Monthly benefit paid to assist families with the cost of raising children with a disability.",
            "fields":[
               
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-disability-benefit.html"
         },
         {
            "key":"gst_credit",
            "label":"GST/HST Credit",
            "description":"The GST/HST Credit is a tax-free quarterly payment that helps individuals and families with low and modest incomes offset all or part of the GST or HST that they pay.",
            "fields":[
               
            ],
            "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html"
         }
      ]
   },
   "provincial":{
      "Alberta":{
         "taxAdjustments":[],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"child_care_expenses_s7"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"wcb_income"
                  },
                  {
                     "name":"social_assistance_income"
                  },
                  {
                     "name":"net_federal_supplements"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"capital_gains_income"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"capital_gains_income"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"cpp_qpp_self"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 1 of Alberta Worksheet.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/td1ab/td1ab-fill-20e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Alberta political contributions tax credit. Can be claimed by candidates, leadership or nomination contestants. Lines 59 and 60 of Alberta tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P116_13444"
            },
            {
               "key":"provincial_foreign_tax",
               "label":"Provincial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 57 of Alberta tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P111_12793"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 2 of Alberta Worksheet.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/td1ab/td1ab-fill-20e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 5 of Alberta Worksheet.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/td1ab/td1ab-fill-20e.pdf"
            },
            {
               "key":"caregiver_amount",
               "label":"Caregiver Amount",
               "description":"Alberta caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/td1ab/td1ab-fill-20e.pdf"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 6 of Alberta Worksheet.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/td1ab/td1ab-fill-20e.pdf"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 8 of Alberta Worksheet, 5200 of Tax Return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/td1ab/td1ab-fill-20e.pdf"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"adoption",
               "label":"Adoption Expenses",
               "description":"Credit for adoption expenses. Claimed on line 31300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P59_5145"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 31600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P68_6338"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 31800 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/what-when-someone-died/final-return/complete-final-return-steps/common-types-income-a-final-return/federal-non-refundable-tax-credits/line-31800-disability-amount-transferred-a-dependant.html"
            },
            {
               "key":"student_loans",
               "label":"Student Loans",
               "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"investor_tax_credit",
               "label":"Investor Tax Credit",
               "description":"Tax credit for acquiring shares in a venture capital corporation or other eligible business. Claimed on Lines 62 and 63 of Alberta tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#Inv_tax_cr"
            },
            {
               "key":"stock_savings_plan",
               "label":"Stock Savings Plan Tax Credit",
               "description":"Tax credit for stock savings plan.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#ASSPTC"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"Alberta dividend tax credit. Claimed on line 61520 of your Alberta tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5009-d/5009-d-fill-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Alberta dividend tax credit. Claimed on line 61520 of your Alberta tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5009-d/5009-d-fill-19e.pdf"
            }
         ],
         "benefits":[
            {
               "key":"alberta_child_family_benefit",
               "label":"Alberta Child & Family Benefit",
               "description":"The Alberta Child and Family Benefit (ACFB) provides direct financial assistance to working individuals and to lower-income families with children under 18. The benefit is paid quarterly (in August, November, February and May). The ACFB begins in July 2020 and replaces the Alberta Child Benefit and Alberta Working Family Benefit.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/information-alberta-child-benefit.html"
            }
         ]
      },
      "British Columbia":{
         "taxAdjustments":[],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"child_care_expenses_s7"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"wcb_income"
                  },
                  {
                     "name":"social_assistance_income"
                  },
                  {
                     "name":"net_federal_supplements"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"capital_gains_income"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"cpp_qpp_enhanced"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"cpp_qpp_self"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5010-c/5010-c-19e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Political contributions tax credit. Can be claimed by candidates, leadership or nomination contestants. Lines 51 and 52 of B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"provincial_foreign_tax",
               "label":"Provincial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 49 of Alberta tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 301 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 303 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 30400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30400-amount-eligible-dependant.html"
            },
            {
               "key":"caregiver_adult",
               "label":"Caregiver for Adult",
               "description":"B.C. caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58175 of your B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line ___ of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 308 and 310 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"employee_share_ownership_plan",
               "label":"Employee Share Ownership Plan",
               "description":"B.C. employee share ownership plan credit. Claimed on line 75 of your B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#P141_15776"
            },
            {
               "key":"employee_venture_capital",
               "label":"Employee Venture Capital",
               "description":"B.C. employee venture capital credit. Claimed on line 76 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#P146_16546"
            },
            {
               "key":"farmers_food_donation",
               "label":"Farmers' Food Donation",
               "description":"B.C. credit for qualifing food donations by eligible farmers to eligible charities. Claimed on line 58980 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#ln_5898"
            },
            {
               "key":"logging",
               "label":"Logging Tax Credit",
               "description":"B.C. credit for logging operations for which logging tax is payable. Claimed on line 69 of your B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#P131_14642"
            },
            {
               "key":"mining",
               "label":"Mining Tax Credit",
               "description":"B.C. credit for mining flow through shares, for eligible flow-through mining expenditures. Claimed on line 79 of your B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#P158_18344"
            },
            {
               "key":"adoption",
               "label":"Adoption Expenses",
               "description":"Credit for adoption expenses. Claimed on line 313 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 316 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 58480 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/what-when-someone-died/final-return/complete-final-return-steps/common-types-income-a-final-return/federal-non-refundable-tax-credits/line-31800-disability-amount-transferred-a-dependant.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 323 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 324 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s. 7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 324 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 326 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on line 416 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"tax_reduction_credit",
               "label":"B.C. Tax Reduction Credit",
               "description":"The B.C. tax reduction credit is a non-refundable tax credit for individuals who have a net income below a certain amount.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"volunteer_firefighters",
               "label":"Volunteer Firefighters",
               "description":"Volunteer firefighters' amount. Claimed on line 31220 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31220-volunteer-firefighters-amount-line-31240-search-rescue-volunteers-amount.html"
            },
            {
               "key":"search_and_rescue",
               "label":"Search and Rescue",
               "description":"Search and rescue volunteers' amount. Claimed on line 31240 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31220-volunteer-firefighters-amount-line-31240-search-rescue-volunteers-amount.html"
            },
            {
               "key":"home_renovation_seniors_disabilities",
               "label":"Home Renovation Credit for Seniors etc.",
               "description":"Credit for expenses to improvements to the principal residence or land allowing a senior or person with a disability to gain access or become more mobile or functional within the home or land. Claimed on line 14 of your B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#L14"
            },
            {
               "key":"mining_exploration",
               "label":"Mining Exploration Tax Credit",
               "description":"Credit for qualified mining exploration expenses. Claimed on lines 22 and 23 of your B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#L19_L20"
            },
            {
               "key":"training_tax_credit",
               "label":"Training Tax Credit",
               "description":"Tax credit for eligible programs administered through BC Industry Training Authority. Claimed on line 24 (individuals) or 25 (employers) of your B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#L23"
            },
            {
               "key":"venture_capital_tax_credit",
               "label":"Venture Capital Tax Credit",
               "description":"Credit for acquiring shares from a venture capital corporation or other eligible business. Claimed on lines 17 to 21 of B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#L15_L18"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"B.C. dividend tax credit. Claimed on line 61520 of your B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5010-d/5010-d-fill-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"B.C. dividend tax credit. Claimed on line 61520 of your B.C. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5010-d/5010-d-fill-19e.pdf"
            }
         ],
         "benefits":[
            {
               "key":"child_opportunity_benefit",
               "label":"BC Childhood Opportunity Benefit",
               "description":"The BC  childhood opportunity benefit (BCCOB) is a tax-free monthly payment to qualifying families to help with the cost of raising children under the age of six.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-british-columbia.html"
            },
            {
               "key":"bc_climate_action_tax_credit",
               "label":"BCCATC",
               "description":"The BC climate action tax credit (BCCATC) is a tax-free payment made to low-income individuals and families to help offset the carbon taxes they pay.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-british-columbia.html"
            },
            {
               "key":"sales_tax_credit",
               "label":"Sales Tax Credit",
               "description":"Sales tax credit for low-income families and individuals. Claimed on lines 1 to 13 of your B.C. tax return.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/british-columbia/5010-pc/information-residents-british-columbia.html#L1_L13"
            }
         ]
      },
      "Manitoba":{
         "taxAdjustments":[],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 1 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5007-c/5007-c-19e.pdf"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 2 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5007-c/5007-c-19e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 3 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5007-c/5007-c-19e.pdf"
            },
            {
               "key":"caregiver_adult",
               "label":"Caregiver for Adult",
               "description":"Manitoba caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 21 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5007-c/5007-c-19e.pdf"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on lines 6-9 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5007-c/5007-c-19e.pdf"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 10 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5007-c/5007-c-19e.pdf"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"employee_share_ownership_plan",
               "label":"Employee Share Ownership Plan",
               "description":"Manitoba employee share ownership plan credit. Claimed on line 73 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#Line75_MB479"
            },
            {
               "key":"adoption",
               "label":"Adoption Expenses",
               "description":"Credit for adoption expenses. Claimed on line 31300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P59_5145"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 31600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P68_6338"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 31800 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/what-when-someone-died/final-return/complete-final-return-steps/common-types-income-a-final-return/federal-non-refundable-tax-credits/line-31800-disability-amount-transferred-a-dependant.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"childrens_arts",
               "label":"Children's Arts and Cultural Activity",
               "description":"Tax credit for up to $500 per child for fees paid relating to membership in a prescribed program of artistic, cultural, recreational or developmental activity.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#line5841"
            },
            {
               "key":"childrens_arts_s7",
               "label":"Children's Arts Credit (s.7)",
               "description":"Tax credit for up to $500 per child for fees paid relating to membership in a prescribed program of artistic, cultural, recreational or developmental activity.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#line5841"
            },
            {
               "key":"fitness_tax_credit",
               "label":"Fitness Tax Credit",
               "description":"Tax credit for up to $500 in fees for a prescribed program of physical activity for yourself, or your child.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P70_5093"
            },
            {
               "key":"fitness_tax_credit_s7",
               "label":"Fitness Tax Credit (s.7)",
               "description":"Tax credit for up to $500 in fees for a prescribed program of physical activity for your child.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P70_5093"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Tax credit for contribution to a recognized provincial political party or candidate for election to the Manitoba Legislature.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"labour_sponsored_funds",
               "label":"Labour Sponsored Funds",
               "description":"Tax credit for investment in a registered labour-sponsored venture capital corporation.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"mineral_exploration",
               "label":"Mineral Exploration",
               "description":"Tax credit for investment in flow-through shares of qualifying mineral exploration companies. Claimed on line 75 of Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P190_20452"
            },
            {
               "key":"community_development",
               "label":"Community Enterprise Development",
               "description":"Manitoba tax credit for investment in specific community enterprises or in community development investment pools.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#Line73_MB479"
            },
            {
               "key":"small_business_venture_capital",
               "label":"Small Business Venture Capital",
               "description":"Tax credit for the acquisition of equity capital in emerging enterprises that require larger amounts of capital than community ownership can provide.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"manitoba_family_tax_benefit",
               "label":"Manitoba Family Tax Benefit",
               "description":"Tax credit for low income families, based on a variety of factors.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"volunteer_firefighters",
               "label":"Volunteer Firefighters",
               "description":"Volunteer firefighters' amount. Claimed on line 31220 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31220-volunteer-firefighters-amount-line-31240-search-rescue-volunteers-amount.html"
            },
            {
               "key":"search_and_rescue",
               "label":"Search and Rescue",
               "description":"Search and rescue volunteers' amount. Claimed on line 31240 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31220-volunteer-firefighters-amount-line-31240-search-rescue-volunteers-amount.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on line 416 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"other_credits_s7",
               "label":"Other Credits (s.7)",
               "description":"Other s.7 expense related tax credits including political donations, certain investments, etc. Claimed on line 416 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"book_publishing",
               "label":"Book Publishing",
               "description":"Manitoba tax credit for eligible expenditures when publishing a qualifying book. Claimed on line 73 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P5224_7890"
            },
            {
               "key":"cultural_industries_printing",
               "label":"Cultural Industries Printing",
               "description":"Manitoba tax credit for salaries or wages for printing an eligible book. Claimed on line 75 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#line76"
            },
            {
               "key":"education_property",
               "label":"Education Property",
               "description":"Manitoba tax credit for education school taxes paid on a principal residence. Claimed on lines 20 to 30 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P271_29388"
            },
            {
               "key":"fertility_treatment",
               "label":"Fertility Treatment",
               "description":"Manitoba tax credit for eligible fertility treatment expenditures. Claimed on line 63 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#line_63"
            },
            {
               "key":"green_energy_equipment",
               "label":"Green Energy",
               "description":"Manitoba tax credit for geothermal or solar thermal heating systems. Claimed on lines 69 and 70 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P224_7891"
            },
            {
               "key":"paid_work_experience",
               "label":"Paid Work Experience",
               "description":"Manitoba tax credit for salaries or wages paid to qualifying work experience programs. Claimed on line 65 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P223_5678"
            },
            {
               "key":"personal_tax_credit",
               "label":"Personal Tax Credit",
               "description":"Manitoba refundable tax credit for eligible residents and their dependants.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P208_21984"
            },
            {
               "key":"caregiver_amount",
               "label":"Caregiver Amount",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 5840 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/td1ab/td1ab-fill-20e.pdf"
            },
            {
               "key":"primary_caregiver",
               "label":"Primary Caregiver",
               "description":"Manitoba tax credit for primary caregivers to eligible persons. Claimed on line 61 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P223_56788"
            },
            {
               "key":"school_tax_credit",
               "label":"School Tax Credit for Homeowners",
               "description":"Manitoba tax credit for school taxes more than $160 per year. Claimed on lines 43 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#P334_37509"
            },
            {
               "key":"seniors_school_tax_rebate",
               "label":"Seniors' School Tax Rebate",
               "description":"Manitoba tax credit for school taxes paid by seniors.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/manitoba/5007-pc/information-residents-manitoba.html#snrs_schl_tx"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"Manitoba dividend tax credit. Claimed on line 61520 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5007-d/5007-d-fill-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Manitoba dividend tax credit. Claimed on line 61520 of your Manitoba tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5007-d/5007-d-fill-19e.pdf"
            }
         ],
         "benefits":[
            {
               "key":"manitoba_child_benefit",
               "label":"Manitoba Child Benefit",
               "description":"This credit is a tax-free amount paid to help Manitoba families with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.gov.mb.ca/fs/eia/mcb.html#:~:text=Coverage,who%20earn%20%2415%2C000%20to%20%2420%2C000."
            }
         ]
      },
      "New Brunswick":{
         "taxAdjustments":[
            {
               "key":"low_income_tax_reduction",
               "label":"Low Income Tax Reduction",
               "description":"The Low Income Tax Reduction (LITR) is a provincial personal income tax reduction for low income individuals and families.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#P125_13761"
            }
         ],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 1 of New Brunswick Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-c/5004-c-19e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"New Brunswick political contributions tax credit. Lines 82 and 83 of New Brunswick tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#P148_16180"
            },
            {
               "key":"provincial_foreign_tax",
               "label":"Provincial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 57 of New Brunswick Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#P119_13114"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1954 or earlier). Claimed on line 58080 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-c/5004-c-19e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 58120 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-c/5004-c-19e.pdf"
            },
            {
               "key":"caregiver_amount",
               "label":"Caregiver Amount",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-d/5004-d-19e.pdf"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 58160 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-c/5004-c-19e.pdf"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 58200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-c/5004-c-19e.pdf"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 308 and 310 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 58440 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-d/5004-d-19e.pdf"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 58480 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-d/5004-d-19e.pdf"
            },
            {
               "key":"student_loans",
               "label":"Student Loans",
               "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#P100_10706"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#P100_10706"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"volunteer_firefighters",
               "label":"Volunteer Firefighters",
               "description":"Volunteer firefighters' amount. Claimed on line 31220 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31220-volunteer-firefighters-amount-line-31240-search-rescue-volunteers-amount.html"
            },
            {
               "key":"search_and_rescue",
               "label":"Search and Rescue",
               "description":"Search and rescue volunteers' amount. Claimed on line 31240 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31220-volunteer-firefighters-amount-line-31240-search-rescue-volunteers-amount.html"
            },
            {
               "key":"small_business_investor",
               "label":"Small Business Investor",
               "description":"Credit for investments in qualifying small businesses. Claimed on line 87 of New Brunswick Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#P162_17595"
            },
            {
               "key":"labour_sponsored_venture_capital",
               "label":"Labour Sponsored VC Fund",
               "description":"Credit for investments in qualifying labour-sponsored venture capital funds. Claimed on line 85 of New Brunswick Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#P155_16958"
            },
            {
               "key":"small_business_investor",
               "label":"Small Business Investor",
               "description":"Credit for investments in qualifying small businesses. Claimed on line 87 of New Brunswick Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#P162_17595"
            },
            {
               "key":"low_income_tax_reduction",
               "label":"Low Income Tax Reduction",
               "description":"Tax reduction for low income residents of New Brunswick.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#P125_13761"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"New Brunswick dividend tax credit. Claimed on line 61520 of your New Brunswick tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-d/5004-d-fill-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"New Brunswick dividend tax credit. Claimed on line 61520 of your New Brunswick tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5004-d/5004-d-fill-19e.pdf"
            }
         ],
         "benefits":[
            {
               "key":"new_brunswick_child_tax_benefit",
               "label":"New Brunswick Child Tax Benefit",
               "description":"This credit is a tax-free amount paid to help New Brunswick families with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-new-brunswick.html"
            },
            {
               "key":"new_brunswick_hst_credit",
               "label":"New Brunswick HST Credit",
               "description":"This credit is a tax-free amount paid to help New Brunswick residents with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4210/gst-hst-credit.html#NBhstc"
            },
            {
               "key":"seniors_home_renovation",
               "label":"Seniors' Home Renovation",
               "description":"This a refundable tax credit paid to seniors for expenses to improvements to their principal residence.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/new-brunswick/5004-pc/information-residents-new-brunswick.html#nw_brnwck_snrs_hm"
            }
         ]
      },
      "Newfoundland and Labrador":{
         "taxAdjustments":[
            {
               "key":"low_income_tax_reduction",
               "label":"Low Income Tax Reduction",
               "description":"The Low Income Tax Reduction (LITR) is a provincial personal income tax reduction for low income individuals and families.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://assembly.nl.ca/Legislation/sr/statutes/i01-1.htm#21_1"
            }
         ],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 1 of your Newfoundland and Labrador Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-c/5001-c-19e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Newfoundland and Labrador political contributions tax credit. Lines 62 and 63 of Newfoundland and Labrador Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/newfoundland-labrador/5001-pc/information-residents-newfoundland-labrador.html#P127_14229"
            },
            {
               "key":"provincial_foreign_tax",
               "label":"Provincial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 60 of Newfoundland and Labrador Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/newfoundland-labrador/5001-pc/information-residents-newfoundland-labrador.html#P122_13582"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 58080 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-c/5001-c-19e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 58120 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-c/5001-c-19e.pdf"
            },
            {
               "key":"caregiver_amount",
               "label":"Caregiver Amount",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-d/5001-d-19e.pdf"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 58160 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-c/5001-c-19e.pdf"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 58200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-c/5001-c-19e.pdf"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"adoption",
               "label":"Adoption Expenses",
               "description":"Credit for adoption expenses. Claimed on line 31300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P59_5145"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 58440 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-d/5001-d-19e.pdf"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 58480 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-d/5001-d-19e.pdf"
            },
            {
               "key":"student_loans",
               "label":"Student Loans",
               "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"direct_equity",
               "label":"Direct Equity Tax Credit",
               "description":"Credit for investments in eligible shares. Claimed on line 65 of Newfoundland and Labrador Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/newfoundland-labrador/5001-pc/information-residents-newfoundland-labrador.html#P141_15891"
            },
            {
               "key":"low_income_tax_reduction",
               "label":"Low Income Tax Reduction",
               "description":"Tax reduction for low income residents of Newfoundland and Labrador.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/newfoundland-labrador/5001-pc/information-residents-newfoundland-labrador.html#Part_D"
            },
            {
               "key":"resort_property_investment",
               "label":"Resort Property Investment",
               "description":"Credit for investment in registered resort development property. Claimed on line 67 of Newfoundland and Labrador Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/newfoundland-labrador/5001-pc/information-residents-newfoundland-labrador.html#OLE_LINK1"
            },
            {
               "key":"venture_capital",
               "label":"Venture Capital Tax Credit",
               "description":"Credit for investments in qualifying venture capital funds. Claimed on line 69 of Newfoundland and Labrador Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/newfoundland-labrador/5001-pc/information-residents-newfoundland-labrador.html#P149_2598"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"Newfoundland and Labrador dividend tax credit. Claimed on line 61520 of your Newfoundland and Labrador tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-d/5001-d-16e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Newfoundland and Labrador dividend tax credit. Claimed on line 61520 of your Newfoundland and Labrador tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5001-d/5001-d-16e.pdf"
            },
            {
               "key":"child_care_expenses_credit_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            }
         ],
         "benefits":[
            {
               "key":"newfoundland_child_benefit",
               "label":"Newfoundland and Labrador Child Benefit",
               "description":"This credit is a tax-free amount paid to help Newfoundland and Labrador families with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-newfoundland-labrador.html"
            },
            {
               "key":"newfoundland_income_supplement",
               "label":"Newfoundland and Labrador Income Supplement",
               "description":"This credit is a tax-free amount paid to help Newfoundland and Labrador individuals, seniors and families with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-newfoundland-labrador.html#nls"
            },
            {
               "key":"newfoundland_mother_baby_nutrition_supplement",
               "label":"Mother Baby Nutrition Supplement",
               "description":"This credit is a tax-free amount paid to help Newfoundland and Labrador families with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-newfoundland-labrador.html#nlcb"
            }
         ]
      },
      "Northwest Territories":{
         "taxAdjustments":[],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 58040 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-c/5012-c-19e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Political contributions tax credit. Line 57 and 58 of your NWT tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/northwest-territories/5012-pc/information-residents-northwest-territories.html#P118_12789"
            },
            {
               "key":"territorial_foreign_tax",
               "label":"Territorial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 55 of NWT tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/northwest-territories/5012-pc/information-residents-northwest-territories.html#P113_12136"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 58080 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-c/5012-c-19e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 58120 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-c/5012-c-19e.pdf"
            },
            {
               "key":"caregiver_amount",
               "label":"Caregiver Amount",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-d/5012-d-19e.pdf"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 58160 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-c/5012-c-19e.pdf"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 58200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-c/5012-c-19e.pdf"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 58440 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-d/5012-d-19e.pdf"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 58480 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-d/5012-d-19e.pdf"
            },
            {
               "key":"student_loans",
               "label":"Student Loans",
               "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/northwest-territories/5012-pc/information-residents-northwest-territories.html#P96_10168"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/northwest-territories/5012-pc/information-residents-northwest-territories.html#P96_10168"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"NWT dividend tax credit. Claimed on line 61520 of your NWT tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-d/5012-d-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"NWT dividend tax credit. Claimed on line 61520 of your NWT tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5012-d/5012-d-19e.pdf"
            },
            {
               "key":"cost_of_living",
               "label":"Cost of Living Refundable Credit",
               "description":"Refundable tax credit to offset the increased cost of living in the Northwest Territories. Claimed on lines 1-14 of your NWT tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/northwest-territories/5012-pc/information-residents-northwest-territories.html#P153_16428"
            }
         ],
         "benefits":[
            {
               "key":"nwt_child_benefit",
               "label":"Northwest Territories Child Benefit",
               "description":"This credit is a tax-free amount paid to help Manitoba families with low and modest incomes.",
               "fields":[],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/northwest-territories.html#NTCB"
            },
            {
              "key":"nwt_colo",
              "label":"Northwest Territories COLO",
              "description":'The NWT Cost of Living Offset (COLO) is a quarterly benefit paid to help Northwest Territories families offset the carbon tax.',
               "fields":[],
              "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/northwest-territories/5012-pc/information-residents-northwest-territories.html#p2t2"
            }
         ],
      },
      "Nova Scotia":{
         "taxAdjustments":[
            {
               "key":"low_income_tax_reduction",
               "label":"Low Income Tax Reduction",
               "description":"The Low Income Tax Reduction (LITR) is a provincial personal income tax reduction for low income individuals and families.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html"
            }
         ],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 58040 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-c/5003-c-19e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Political contributions tax credit. Line 72 of Nova Scotia tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html#P163_17349"
            },
            {
               "key":"provincial_foreign_tax",
               "label":"Provincial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 50 of Nova Scotia tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html#P130_14305"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 58080 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-c/5003-c-19e.pdf"
            },
            {
               "key":"age_amount_supplement",
               "label":"Age Amount Supplement",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 2.1 of the Worksheet for the Return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/td1ns-ws/td1ns-ws-20e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 58120 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-c/5003-c-19e.pdf"
            },
            {
               "key":"caregiver_amount",
               "label":"Caregiver Amount",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-d/5003-d-19e.pdf"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 58160 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-c/5003-c-19e.pdf"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 58200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-c/5003-c-19e.pdf"
            },
            {
               "key":"young_children",
               "label":"Amount for Young Children",
               "description":"Amount for young children less than 6 years of age. Claimed on line 58230 of your Nova Scotia tax return. Credit is $100 per eligible month. Eligibility criteria include that the child was living with you on the first day of the month; the child was less than 6 years of age on the first day of the month; no one else claimed this amount for the month; and no one has received a special allowance for the child for any of the months. In shared parenting scenarios the calculator assumes the lower-earning spouse claims the amount.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 58440 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-d/5003-d-19e.pdf"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 58480 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-d/5003-d-19e.pdf"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html#P111_11929"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html#P111_11929"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"equity_tax_credit",
               "label":"Equity Tax Credit",
               "description":"Credit for eligible investments. Claimed on line 79 of your Nova Scotia tax form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html#P88_8900"
            },
            {
               "key":"innovation_equity_tax_credit",
               "label":"Innovation Equity Tax Credit",
               "description":"Credit for eligible investments in an approved corporation. Claimed on line 81 of your Nova Scotia tax form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html#IETC"
            },
            {
               "key":"labour-sponsored_venture_capital",
               "label":"Labour-Sponsored VC",
               "description":"Credit equal to 20% of investment in eligible shares. Claimed on line 77 of your Nova Scotia tax form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html#P177_18684"
            },
            {
               "key":"low-income_tax_reduction",
               "label":"Low-Income Tax Reduction",
               "description":"Tax reduction for low-income residents of Nova Scotia.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html#P138_15662"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"Nova Scotia dividend tax credit. Claimed on line 61520 of your Nova Scotia tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-d/5003-d-fill-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Nova Scotia dividend tax credit. Claimed on line 61520 of your Nova Scotia tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-d/5003-d-fill-19e.pdf"
            },
            {
               "key":"age_amount",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Nova Scotia dividend tax credit. Claimed on line 61520 of your Nova Scotia tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5003-d/5003-d-fill-19e.pdf"
            }
         ],
         "benefits":[
            {
               "key":"nova_scotia_child_benefit",
               "label":"Nova Scotia Child Benefit",
               "description":"This credit is a tax-free amount paid to help Nova Scotia families with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-nova-scotia.html#nscb"
            },
            {
               "key":"nova_scotia_affordable_living",
               "label":"Nova Scotia Affordable Living Tax Credit",
               "description":"This credit is a tax-free amount paid to help Nova Scotia families with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-nova-scotia.html#nsltc"
            },
            {
               "key":"volunteer_firefighter_tax_credit",
               "label":"Volunteer Firefighter",
               "description":"Refundable tax credit for eligible volunteer firefighters and ground search-and-rescue volunteers. Claimed on lines 87 of your Nova Scotia tax form.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nova-scotia/5003-pc/information-residents-nova-scotia.html#nova"
            }
         ]
      },
      "Nunavut":{
         "taxAdjustments":[],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 58040 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-c/5014-c-19e.pdf"
            },
            {
               "key":"territorial_foreign_tax",
               "label":"Territorial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 56 of Nunavut tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nunavut/5014-pc/information-residents-nunavut.html#P112_11876"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 58080 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-c/5014-c-19e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 58120 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-c/5014-c-19e.pdf"
            },
            {
               "key":"caregiver_amount",
               "label":"Caregiver Amount",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-d/5014-d-19e.pdf"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 58160 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-c/5014-c-19e.pdf"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 58200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-c/5014-c-19e.pdf"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 58440 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-d/5014-d-19e.pdf"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 58480 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-d/5014-d-19e.pdf"
            },
            {
               "key":"student_loans",
               "label":"Student Loans",
               "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nunavut/5014-pc/information-residents-nunavut.html#P95_9971"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nunavut/5014-pc/information-residents-nunavut.html#P95_9971"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"volunteer_firefighters",
               "label":"Volunteer Firefighters",
               "description":"Volunteer firefighters' amount. Claimed on line 58 of your Nunavut tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nunavut/5014-pc/information-residents-nunavut.html#P5112_11876"
            },
            {
               "key":"young_children",
               "label":"Amount for Young Children",
               "description":"Amount for young children less than 6 years of age. Claimed on line 58230 of your Nunavut tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nunavut/5014-pc/information-residents-nunavut.html#Line_5823"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"Nunavut dividend tax credit. Claimed on line 61520 of your Nunavut tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-d/5014-d-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Nunavut dividend tax credit. Claimed on line 61520 of your Nunavut tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5014-d/5014-d-19e.pdf"
            },
            {
               "key":"cost_of_living",
               "label":"Cost of Living Refundable Credit",
               "description":"Refundable tax credit to offset the increased cost of living in Nunavut. Claimed on lines 1-14 of your Nunavut tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nunavut/5014-pc/information-residents-nunavut.html#P120_12557"
            }
         ],
         "benefits":[
            {
               "key":"political_contribution",
               "label":"Political Contributions",
               "description":"Refundable tax credit for political contributions made to candidates for the Nunavut Legislative Assembly. Claimed on lines 15 to 20 of your Nunavut tax return.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/nunavut/5014-pc/information-residents-nunavut.html#P127_13372"
            },
            {
               "key":"nunavut_child_benefit",
               "label":"Nunavut Child Benefit",
               "description":"This benefit is a tax-free amount paid to help Nunavut families with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/nunavut.html"
            }
         ]
      },
      "Ontario":{
         "taxAdjustments":[
            {
               "key":"ontario_provincial_surtax",
               "label":"Ontario Provincial Surtax",
               "description":"Additional tax paid by high-income individuals.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
            },
            {
               "key":"additional_tax_for_alternative_minimum_tax",
               "label":"Alternative Minimum Tax",
               "description":"Add additional tax for alternative minimum tax.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
            },
            {
               "key":"ontario_tax_reduction",
               "label":"Ontario Tax Reduction",
               "description":"Reduction in tax for low income families and individuals.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
            },
            {
                "key":"ontario_care_childcare_credit",
                "label":"CARE Childcare Credit",
                "description":"Add refundable CARE childcare credit.",
                "fields":[
                    {
                        "name":"amount"
                    }
                ],
                "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-21e.pdf"
            },
            {
               "key":"ontario_health_premium",
               "label":"Ontario Health Premium",
               "description":"Health care premium payable based on income.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
            },
            {
               "key":"ontario_refundable_credits",
               "label":"Ontario Refundable Credits",
               "description":"Add additional refundable Ontario tax credits.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
            }
         ],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 1 of Ontario tax worksheet.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Ontario political contributions tax credit. Lines 3 and 4 of Ontario tax credit form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#p8l3l4"
            },
            {
               "key":"provincial_foreign_tax",
               "label":"Provincial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 75 of Ontario tax form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#Step_5"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 2 of Ontario tax form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on lines 3-9 of Ontario tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
            },
            {
               "key":"caregiver_adult",
               "label":"Caregiver Amount",
               "description":"Ontario caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58185 of your Ontario tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#P57_4817"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 58160 of Ontario tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-c/5006-c-19e.pdf"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"adoption",
               "label":"Adoption Expenses",
               "description":"Credit for adoption expenses. Claimed on line 31300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#P66_5698"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 31600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#P75_7069"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 58480 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/what-when-someone-died/final-return/complete-final-return-steps/common-types-income-a-final-return/federal-non-refundable-tax-credits/line-31800-disability-amount-transferred-a-dependant.html"
            },
            {
               "key":"student_loans",
               "label":"Student Loans",
               "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#Line_58689"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#Line_58689"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"community_food",
               "label":"Community Food Program",
               "description":"Credit for community food program donation tax credit for farmers. Claimed on line 79 of your Ontario tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#p7l79"
            },
            {
               "key":"low_income",
               "label":"LIFT",
               "description":"Credit for low income individuals and families. Claimed on line 77 of your Ontario tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#p7l77"
            },
            {
               "key":"apprenticeship_training",
               "label":"Apprenticeship Training",
               "description":"Credit for eligible expenditures for employing eligible apprentices. Claimed on line 7 of your Ontario credits form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#p8l7"
            },
            {
               "key":"childcare_access",
               "label":"Childcare Access and Relief",
               "description":"Credit for childcare and other child related expenses. Claimed on line 1 of your Ontario credits form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#p8l1"
            },
            {
               "key":"cooperative_education",
               "label":"Co-operative Education",
               "description":"Credit for hiring co-op students. Claimed on line 8 of your Ontario credits form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#p8l8"
            },
            {
               "key":"focused_flow_through",
               "label":"Focused Flow-Through Share",
               "description":"Credit for qualifying expenses for focused flow-through shares. Claimed on line 5 of your Ontario credits form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#p8l5"
            },
            {
               "key":"seniors_public_transit",
               "label":"Seniors' Public Transit",
               "description":"Credit for seniors' public transit expneses. Claimed on line 2 of your Ontario credits form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/ontario/5006-pc/information-residents-ontario.html#p8l2"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"Ontario dividend tax credit. Claimed on line 61520 of your Ontario tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-d/5006-d-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Ontario dividend tax credit. Claimed on line 61520 of your Ontario tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5006-d/5006-d-19e.pdf"
            }
         ],
         "benefits":[
            {
               "key":"ontario_child_benefit",
               "label":"Ontario Child Benefit",
               "description":"This credit is a tax-free amount paid to help Ontario families with low and modest incomes provide for their children.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-ontario.html"
            },
            {
               "key":"ontario_sales_tax_credit",
               "label":"Ontario Sales Tax Credit",
               "description":"The Ontario sales tax credit (OSTC) is a tax-free payment designed to provide relief to low to moderate-income Ontario residents for the sales tax they pay. Paid as part of the Ontario Trillium Benefit.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-ontario.html"
            },
            {
               "key":"ontario_energy_and_property_tax_credit",
               "label":"Energy and Property Tax Credit",
               "description":"The Ontario energy and property tax credit (OEPTC) is designed to help low to moderate-income Ontario residents with the sales tax on energy and with property taxes. Paid as part of the Ontario Trillium Benefit.",
               "fields":[
                  {
                     "name":"property_tax_own_residence"
                  },
                  {
                     "name":"property_tax_other"
                  },
                  {
                     "name":"rent"
                  },
                  {
                     "name":"energy_amount"
                  },
                  {
                     "name":"long_term_care_cost"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-ontario.html#ptc"
            },
            {
               "key":"ontario_energy_and_property_tax_credit_seniors",
               "label":"Energy and Property Tax Credit (Seniors)",
               "description":"The Ontario energy and property tax credit (OEPTC) is designed to help low to moderate-income Ontario residents with the sales tax on energy and with property taxes. Paid as part of the Ontario Trillium Benefit.",
               "fields":[
                  {
                     "name":"property_tax_own_residence"
                  },
                  {
                     "name":"property_tax_other"
                  },
                  {
                     "name":"rent"
                  },
                  {
                     "name":"energy_amount"
                  },
                  {
                     "name":"long_term_care_cost"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-ontario.html#ptc"
            },
            {
               "key":"northern_ontario_energy_credit",
               "label":"Northern Ontario Energy Credit",
               "description":"The Northern Ontario energy credit (NOEC) is designed to help low to moderate-income Northern Ontario residents with the higher energy costs they face living in the north. Paid as part of the Ontario Trillium Benefit.",
               "fields":[
                  {
                     "name":"northern_resident"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-ontario.html#nc"
            },
            {
               "key":"senior_homeowners_property_tax_grant",
               "label":"Senior Homeowners' Property Tax Grant",
               "description":"The Ontario senior homeowners' property tax grant (OSHPTG) is intended to help offset property taxes for seniors who own their own home and who have low to moderate incomes.",
               "fields":[
                  {
                     "name":"property_tax"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-ontario.html#shptg"
            }
         ]
      },
      "Prince Edward Island":{
         "taxAdjustments":[
            {
               "key":"provincial_surtax",
               "label":"Provincial Surtax",
               "description":"Additional tax paid by high-income individuals.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-c/5002-c-19e.pdf"
            },
            {
               "key":"low_income_tax_reduction",
               "label":"Low Income Tax Reduction",
               "description":"The Low Income Tax Reduction (LITR) is a provincial personal income tax reduction for low income individuals and families.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/prince-edward-island/5002-pc/information-residents-prince-edward-island.html#P130_13917"
            }
         ],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 58040 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-c/5002-c-19e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Political contributions tax credit. Lines 87 and 88 of P.E.I. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/prince-edward-island/5002-pc/information-residents-prince-edward-island.html#P171_17730"
            },
            {
               "key":"provincial_foreign_tax",
               "label":"Provincial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Lines 85 of P.E.I. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/prince-edward-island/5002-pc/information-residents-prince-edward-island.html#P165_17083"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 58080 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-c/5002-c-19e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 58120 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-c/5002-c-19e.pdf"
            },
            {
               "key":"caregiver_amount",
               "label":"Caregiver Amount",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-d/5002-d-19e.pdf"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 58160 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-c/5002-c-19e.pdf"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 58200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-c/5002-c-19e.pdf"
            },
            {
               "key":"young_children",
               "label":"Amount for Young Children",
               "description":"Amount for young children less than 6 years of age. Claimed on line 58230 of your P.E.I. tax return. Credit is $100 per eligible month. Eligibility criteria include that the child was living with you on the first day of the month; the child was less than 6 years of age on the first day of the month; no one else claimed this amount for the month; and no one has received a special allowance for the child for any of the months. In shared parenting scenarios the calculator assumes the lower-earning spouse claims the amount.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/prince-edward-island/5002-pc/information-residents-prince-edward-island.html#P60_5823"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 58440 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-d/5002-d-19e.pdf"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 58480 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-d/5002-d-19e.pdf"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/prince-edward-island/5002-pc/information-residents-prince-edward-island.html#P111_11497"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/prince-edward-island/5002-pc/information-residents-prince-edward-island.html#P111_11497"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"equity_tax_credit",
               "label":"Equity Tax Credit",
               "description":"Tax credit for investments in eligible shares. Claimed on lines 90 of your PEI Tax Form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/prince-edward-island/5002-pc/information-residents-prince-edward-island.html#ln_81"
            },
            {
               "key":"teacher_school_supply_amount",
               "label":"Teacher School Supply",
               "description":"Teacher school supply amount for eligible school supplies. Claimed on line 58500 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/prince-edward-island/5002-pc/information-residents-prince-edward-island.html#P82_6893"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"P.E.I. dividend tax credit. Claimed on line 61520 of your P.E.I. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-d/5002-d-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"P.E.I. dividend tax credit. Claimed on line 61520 of your P.E.I. tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5002-d/5002-d-19e.pdf"
            }
         ],
         "benefits":[
            {
               "key":"pei_sales_tax_credit",
               "label":"P.E.I. Sales Tax Credit",
               "description":"This credit is a non-taxable amount paid to help offset the increase in the sales tax for households with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-prince-edward-island.html"
            },
            {
               "key":"volunteer_firefighter_tax_credit",
               "label":"Volunteer Firefighter",
               "description":"Refundable tax credit for eligible volunteer firefighters. Claimed on lines 31220 of your tax return.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/prince-edward-island/5002-pc/information-residents-prince-edward-island.html#volunteer_firefighter"
            }
         ]
      },
      "Quebec":{
         "taxAdjustments":[],
         "deductions":[
            {
               "key":"deduction_for_workers",
               "label":"Deduction for Workers",
               "description":"Deduction for workers, equal to 6\\% of your eligible work income, up to a maximum of $1,170. Claim on line 201 of your Quebec Income Tax Return",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.revenuquebec.ca/en/citizens/income-tax-return/completing-your-income-tax-return/completing-your-income-tax-return/line-by-line-help/201-to-260-net-income/line-201/#:~:text=The\\%20deduction\\%20for\\%20workers\\%20is,deduction\\%2C\\%20complete\\%20Work\\%20Chart\\%20201."
            },
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 58040 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Alberta political contributions tax credit. Can be claimed by candidates, leadership or nomination contestants. Lines 51 and 52 of Alberta tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"provincial_foreign_tax",
               "label":"Provincial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 49 of Alberta tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 58080 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 58120 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"caregiver_adult",
               "label":"Caregiver for Adult",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 58160 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 58200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"adoption",
               "label":"Adoption Expenses",
               "description":"Credit for adoption expenses. Claimed on line 31300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P59_5145"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 31600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P68_6338"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 31800 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P72_6812"
            },
            {
               "key":"student_loans",
               "label":"Student Loans",
               "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/alberta/5009-pc/information-residents-alberta.html#P101_11430"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"Quebec dividend tax credit. Claimed on line 415 of your Quebec tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.revenuquebec.ca/en/citizens/income-tax-return/completing-your-income-tax-return/completing-your-income-tax-return/line-by-line-help/400-to-447-income-tax-and-contributions/line-415/"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Quebec dividend tax credit. Claimed on line 415 of your Quebec tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.revenuquebec.ca/en/citizens/income-tax-return/completing-your-income-tax-return/completing-your-income-tax-return/line-by-line-help/400-to-447-income-tax-and-contributions/line-415/"
            }
         ],
         "benefits":[
            {
               "key":"work_premium_refund",
               "label":"Work Premium Refund",
               "description":"This credit is a tax-free amount paid to help Quebec residents with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":null
            }
         ]
      },
      "Saskatchewan":{
         "taxAdjustments":[],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 58040 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-c/5008-c-19e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Political contributions tax credit. Line 62 and 63 of your Saskatchewan tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#P150_16390"
            },
            {
               "key":"provincial_foreign_tax",
               "label":"Provincial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 60 of Saskatchewan tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#P140_15190"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 58080 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-c/5008-c-19e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 58120 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-c/5008-c-19e.pdf"
            },
            {
               "key":"caregiver_amount",
               "label":"Caregiver Amount",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-d/5008-d-19e.pdf"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 58160 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-c/5008-c-19e.pdf"
            },
            {
               "key":"dependent_children",
               "label":"Dependent Children",
               "description":"Amount for dependent children under 19. Claimed on line 58210 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-c/5008-c-19e.pdf"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 58200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-c/5008-c-19e.pdf"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 31200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31200-employment-insurance-premiums-through-employment.html"
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 58440 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-d/5008-d-19e.pdf"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 58480 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-d/5008-d-19e.pdf"
            },
            {
               "key":"student_loans",
               "label":"Student Loans",
               "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#P118_12552"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#P118_12552"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"farm_small_business_capital_gains",
               "label":"Farm/Small Business Capital Gains",
               "description":"Capital gains from the disposition of qualified farm property or small business. Claimed on line 48 of your Saskatchewan tax form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#P130_13652"
            },
            {
               "key":"first-time_home_buyers",
               "label":"First-time Homebuyers'",
               "description":"An amount of $10,000 for hte purchase of a qualifying home. Claimed on line 58357 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#FTHB"
            },
            {
               "key":"graduate_tuition",
               "label":"Graduate Tuition Tax Credit",
               "description":"Credit for tuition for graduates from an eligible program at an eligible educational institution. Claimed on line 73 of your Saskatchewan tax form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#line_77"
            },
            {
               "key":"labour-sponsored_venture_capital",
               "label":"Labour-Sponsored VC",
               "description":"Credit for investment in a labour-sponsored venture capital corporation. Claimed on lines 65 to 67 of your Saskatchewan tax form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#P157_17365"
            },
            {
               "key":"mineral_exploration",
               "label":"Mineral Exploration",
               "description":"Credit for the purchase of shares from a mining exploration corporation.  Claimed on lines 68 to 71 of your Saskatchewan tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#P164_18750b"
            },
            {
               "key":"senior_supplementary",
               "label":"Senior Supplementary Amount",
               "description":"Claimed for all persons 65 years of age or older residing in Saskatchewan at the end of the year. Claimed on line 58220 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/saskatchewan/5008-pc/information-residents-saskatchewan.html#P67_5824"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"Saskatchewan dividend tax credit. Claimed on line 61520 of your Saskatchewan tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-d/5008-d-fill-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Saskatchewan dividend tax credit. Claimed on line 61520 of your Saskatchewan tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5008-d/5008-d-fill-19e.pdf"
            }
         ],
         "benefits":[
            {
               "key":"saskatchewan_low_income_tax_credit",
               "label":"Saskatchewan Low Income Tax Credit",
               "description":"This credit is a tax-free amount paid to help Saskatchewan residents with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/province-saskatchewan.html"
            }
         ]
      },
      "Yukon":{
         "taxAdjustments":[],
         "deductions":[
            {
               "key":"split_pension",
               "label":"Split Pension",
               "description":"Deduction for elected split-pension amount. Claimed on line 21000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21000-deduction-elected-split-pension-amount.html"
            },
            {
               "key":"dues",
               "label":"Union or Professional Dues",
               "description":"Union or professional dues deducted. Claimed on line 21200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21200-annual-union-professional-like-dues.html"
            },
            {
               "key":"uccb_repayment",
               "label":"UCCB Repayment",
               "description":"Universal child care benefit repayment. Claimed on line 21300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21300-universal-child-care-benefit-uccb-repayment.html"
            },
            {
               "key":"child_care_expenses",
               "label":"Child Care Expenses",
               "description":"Child care expenses deducted. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"child_care_expenses_s7",
               "label":"Child Care Expenses (s. 7)",
               "description":"Child care expenses for which s. 7 child support is claimed. Claimed on line 21400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21400-child-care-expenses.html"
            },
            {
               "key":"disability_supports",
               "label":"Disability Supports",
               "description":"Disability supports deduction. Claimed on line 21500 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21500-disability-supports-deduction.html"
            },
            {
               "key":"business_investment_loss",
               "label":"Business Investment Loss",
               "description":"Business investment loss deduction. Claimed on line 21700 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21699-21700-business-investment-loss.html"
            },
            {
               "key":"moving_expenses",
               "label":"Moving Expenses",
               "description":"Moving expenses deduction. Claimed on line 21900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-21900-moving-expenses.html"
            },
            {
               "key":"support_payments_made",
               "label":"Support Payments Made",
               "description":"Spousal support payments made for a prior relationship. Note that payments for this relationship are calculated automatically and should not be entered manually. Claimed on line 22000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-21999-22000-support-payments-made.html"
            },
            {
               "key":"carrying_charges",
               "label":"Carrying Charges / Interest",
               "description":"Carrying charges and interest expenses. Claimed on line 22100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22100-carrying-charges-interest-expenses.html"
            },
            {
               "key":"cpp_qpp_self_employment",
               "label":"CPP/QPP on Self-Employment",
               "description":"Deduction for CPP or QPP contributions on self-employment and other earnings. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22200-deduction-cpp-qpp-contributions-on-self-employment-other-earnings.html"
            },
            {
               "key":"exploration_development",
               "label":"Exploration & Development",
               "description":"Exploration and development expenses. Claimed on line 22400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22400-exploration-development-expenses.html"
            },
            {
               "key":"other_employment_expenses",
               "label":"Other Employment Expenses",
               "description":"Other employment expenses deducted. Claimed on line 22900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-229-other-employment-expenses.html"
            },
            {
               "key":"clergy_residence",
               "label":"Clergy Residence Deduction",
               "description":"Clergy residence deduction. Claimed on line 23100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1223.html"
            },
            {
               "key":"other",
               "label":"Other Deductions",
               "description":"Other deductions (specified on tax return). Claimed on line 23200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-23200-other-deductions.html"
            },
            {
               "key":"canadian_forces_police",
               "label":"Canadian Forces & Police",
               "description":"Canadian Forces personnel and police deduction. Claimed on line 24400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24400-canadian-forces-personnel-police-deduction.html"
            },
            {
               "key":"employee_home_relocation_loan",
               "label":"Employee Home Relocation Loan",
               "description":"Employee home relocation loan deduction. Claimed on line 248 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-248-employee-home-relocation-loan-deduction.html"
            },
            {
               "key":"security_options",
               "label":"Security Options",
               "description":"Security options deduction. Claimed on line 24900 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-24900-security-options-deductions.html"
            },
            {
               "key":"other_payments",
               "label":"Other Payments",
               "description":"Other payments deduction. Claimed on line 25000 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25000-other-payments-deduction.html"
            },
            {
               "key":"limited_partnership_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible limited partnership losses from other years. Claimed on line 25100 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25100-limited-partnership-losses-other-years.html"
            },
            {
               "key":"non-capital_losses_other_years",
               "label":"Other Deductions",
               "description":"Deductible non-capital losses from other years. Claimed on line 25200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25200-non-capital-losses-other-years.html"
            },
            {
               "key":"net_capital_losses_other_years",
               "label":"Net Capital Losses (other years)",
               "description":"Deductible net capital losses from other years. Claimed on line 25300 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25300-net-capital-losses-other-years.html"
            },
            {
               "key":"capital_gains",
               "label":"Capital Gains",
               "description":"Capital gains deduction. Automatically calculated based on capital gains income. Claimed on line 25400 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html"
            },
            {
               "key":"cpp_qpp_enhanced",
               "label":"Enhanced CPP or QPP",
               "description":"Deduction for enhanced CPP or QPP contributions on employment & self-employment income. Claimed on line 22215 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"cpp_qpp_self",
               "label":"Self-Employed CPP or QPP",
               "description":"Deduction for half of CPP or QPP contributions on self-employment income. Claimed on line 22200 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-22215-deduction-for-cpp-or-qpp-enhanced-contributions-on-employment-income.html"
            },
            {
               "key":"northern_residents",
               "label":"Northern Residents Deduction",
               "description":"Northern residents deductions. Claimed on line 25500 of your tax return.",
               "fields":[
                  {
                     "name":"basic_residency"
                  },
                  {
                     "name":"basic_travel"
                  },
                  {
                     "name":"basic_lodging"
                  },
                  {
                     "name":"intermediate_residency"
                  },
                  {
                     "name":"intermediate_travel"
                  },
                  {
                     "name":"intermediate_lodging"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25500-northern-residents-deductions.html"
            },
            {
               "key":"additional_deductions",
               "label":"Additional Deductions",
               "description":"Additional deductions (specified on tax return). Claimed on line 25600 of your tax return.",
               "fields":[
                  {
                     "name":"amount"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25600-additional-deductions.html"
            }
         ],
         "credits":[
            {
               "key":"basic_personal_amount",
               "label":"Basic Personal Amount",
               "description":"Basic personal amount. Claimed on line 58040 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5011-c/5011-c-19e.pdf"
            },
            {
               "key":"political_contributions",
               "label":"Political Contributions",
               "description":"Political contributions tax credit. Line 56 and 57 of your Yukon tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#P51_3851"
            },
            {
               "key":"territorial_foreign_tax",
               "label":"Territorial Foreign Tax Credit",
               "description":"Tax credit where federal federal foreign tax credit on non-business income is less than the related tax paid to a foreign country. Line 54 of Yukon tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#P38_2283"
            },
            {
               "key":"age_amount",
               "label":"Age Amount",
               "description":"Age amount (if you were born in 1952 or earlier). Claimed on line 58080 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5011-c/5011-c-19e.pdf"
            },
            {
               "key":"spouse_partner",
               "label":"Spouse or Partner",
               "description":"Spouse or common-law partner amount. Claimed on line 58120 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5011-c/5011-c-19e.pdf"
            },
            {
               "key":"caregiver_adult",
               "label":"Caregiver for Adult",
               "description":"Caregiver amount for spouse or common-law partner, or eligible dependant age 18 or older. Claimed on line 58400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5011-c/5011-c-19e.pdf"
            },
            {
               "key":"caregiver_infirm_children",
               "label":"Caregiver for Infirm Children",
               "description":"Caregiver amount for infirm child under 18 years of age. Claimed on line 30500 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#Line5825"
            },
            {
               "key":"eligible_dependant",
               "label":"Eligible Dependant",
               "description":"Amount for an eligible dependant. Claimed on line 30400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30400-amount-eligible-dependant.html"
            },
            {
               "key":"infirm_dependent",
               "label":"Infirm Dependent age 18 or older",
               "description":"Amount for infirm dependents over 18 years of age. Claimed on line 58200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5011-c/5011-c-19e.pdf"
            },
            {
               "key":"cpp_qpp",
               "label":"CPP or QPP",
               "description":"Credit for CPP or QPP contributions on employment income. Claimed on line 30800 and 31000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30800-cpp-qpp-contributions-through-employment.html"
            },
            {
               "key":"ei_premiums",
               "label":"EI Premiums",
               "description":"Credit for employment insurance premiums. Claimed on line 308 and 310 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":null
            },
            {
               "key":"ei_premiums_self",
               "label":"EI Premiums (Self)",
               "description":"Credit for employment insurance premiums paid on self-employment and other eligible earnings. Claimed on line 31217 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31217-employment-insurance-premiums-on-self-employment-other-eligible-earnings.html"
            },
            {
               "key":"pension_income",
               "label":"Pension Income",
               "description":"Pension income amount. Claimed on line 31400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31400-pension-income-amount.html"
            },
            {
               "key":"disability_amount_self",
               "label":"Disability Amount (Self)",
               "description":"Disability amount (for taxpayer). Claimed on line 31600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/what-when-someone-died/final-return/complete-final-return-steps/common-types-income-a-final-return/federal-non-refundable-tax-credits/line-31600-disability-amount-self.html"
            },
            {
               "key":"disability_amount_dependant",
               "label":"Disability Amount (Dependant)",
               "description":"Disability amount (transferred from dependant). Claimed on line 31800 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/what-when-someone-died/final-return/complete-final-return-steps/common-types-income-a-final-return/federal-non-refundable-tax-credits/line-31800-disability-amount-transferred-a-dependant.html"
            },
            {
               "key":"student_loans",
               "label":"Student Loans",
               "description":"Credit for interest paid on student loans. Claimed on line 31900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31900-interest-paid-on-your-student-loans.html"
            },
            {
               "key":"tuition_self",
               "label":"Tuition, Education (self)",
               "description":"Tuition, education and textbook amounts (for taxpayer). Claimed on line 32300 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html"
            },
            {
               "key":"tuition_child",
               "label":"Tuition, Education (dependant)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"tuition_child_s7",
               "label":"Tuition, Education (s.7)",
               "description":"Tuition, education and textbook amounts (transferred from dependant). Claimed on line 32400 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32400-tuition-education-textbook-amounts-transferred-a-child.html"
            },
            {
               "key":"transfer",
               "label":"Transferred from Spouse",
               "description":"Credit for amounts transferred from spouse or common law partner. Claimed on line 32600 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32600-amounts-transferred-your-spouse-common-law-partner.html"
            },
            {
               "key":"medical",
               "label":"Medical Expenses",
               "description":"Credit for medical expenses for self, spouse, common law partner, or dependant child. Should not be used for s. 7 medical expenses, which are automatically credited when claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#Line5868"
            },
            {
               "key":"medical_expenses_s7",
               "label":"Medical Expenses (s.7)",
               "description":"Credit for s. 7 medical expenses for dependant children. Automatically calculated by this calculator when s. 7 medical expenses are claimed. Claimed on line 33200 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#Line5868"
            },
            {
               "key":"donations_gifts",
               "label":"Donations & Gifts",
               "description":"Credit for donations and gifts. Claimed on line 34900 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-34900-donations-gifts.html"
            },
            {
               "key":"other_credits",
               "label":"Other Credits",
               "description":"Other tax credits including political donations, certain investments, etc. Claimed on lines 40900 and line 41000 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/federal-political-contributions-line-40900-total-contributions-line-41000-tax-credit.html"
            },
            {
               "key":"labour-sponsored_venture_capital",
               "label":"Labour-Sponsored VC",
               "description":"Credit for investment in a labour-sponsored venture capital corporation. Claimed on lines 13 to 25 of your Yukon tax form.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#P163_6582"
            },
            {
               "key":"research_and_development",
               "label":"Research and Development Tax Credit",
               "description":"Credit for eligible expenditures in the tax year for scientific research and experimental development carried out in Yukon.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#P199_9103"
            },
            {
               "key":"small_business_investment",
               "label":"Small Business Investment Tax Credit",
               "description":"Credit for investments in eligible Yukon businesses. Additional 10\\% supplement for individuals residing outside Whitehorse.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#P135_4913"
            },
            {
               "key":"first_nations_tax_credit",
               "label":"First Nations Tax Credit",
               "description":"Income tax credit for members of self-governing Yukon First Nations.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#P204_9763"
            },
            {
               "key":"childrens_fitness",
               "label":"Children's Fitness",
               "description":"Refundable credit for up to $1,000 per child for eligible fees for a prescribed program of physical activity.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#Line5868"
            },
            {
               "key":"childrens_fitness_s7",
               "label":"Children's Fitness (s. 7)",
               "description":"Refundable credit for up to $1,000 per child for eligible fees for a prescribed program of physical activity.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#Line5868"
            },
            {
               "key":"childrens_arts",
               "label":"Children's Arts and Cultural Activity",
               "description":"Tax credit for up to $500 per child for fees paid relating to membership in a prescribed program of artistic, cultural, recreational or developmental activity.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#Line5841"
            },
            {
               "key":"childrens_arts_s7",
               "label":"Children's Arts Credit (s.7)",
               "description":"Tax credit for up to $500 per child for fees paid relating to membership in a prescribed program of artistic, cultural, recreational or developmental activity.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#Line5841"
            },
            {
               "key":"canada_employment",
               "label":"Canada Employment",
               "description":"Canada employment amount. Claimed on line 31260 of your tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31260-canada-employment-amount.html"
            },
            {
               "key":"provincial_dividend_eligible",
               "label":"Dividend Credit (Eligible Dividends)",
               "description":"Yukon dividend tax credit. Claimed on line 61520 of your Yukon tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5011-d/5011-d-19e.pdf"
            },
            {
               "key":"provincial_dividend_noneligible",
               "label":"Dividend Credit (Other Dividends)",
               "description":"Yukon dividend tax credit. Claimed on line 61520 of your Yukon tax return.",
               "fields":[
                  {
                     "name":"base_credit"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5011-d/5011-d-19e.pdf"
            }
         ],
         "benefits":[
            {
               "key":"carbon_price_rebate",
               "label":"Carbon Price Rebate",
               "description":"Fully refundable tax credit for Yukon residents to offset carbon pricing.",
               "fields":[
                  {
                     "name":"outside_whitehorse"
                  }
               ],
               "reference":"https://www.canada.ca/content/dam/cra-arc/formspubs/pbg/5011-s14/5011-s14-19e.pdf"
            },
            {
               "key":"carbon_price_rebate",
               "label":"Business Carbon Price Rebate",
               "description":"Tax credit for operators of business or rental properties in Yukon.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/yukon/5011-pc/information-residents-yukon.html#ybc"
            },
            {
               "key":"yukon_child_benefit",
               "label":"Yukon Child Benefit",
               "description":"This benefit is a tax-free amount paid to help Yukon families with low and modest incomes.",
               "fields":[
                  
               ],
               "reference":"https://www.canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs/yukon.html"
            }
         ]
      }
   }
}

export default TaxYear;
