import {Session} from '../../../auth/session';
import {Context} from '../../../context';
import {ApiVersion} from '../../../base-types';

import {ApplicationCredit} from '../../2021-04';

describe('ApplicationCredit resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const test_session = new Session('1234', domain, '1234', true);
  test_session.accessToken = 'this_is_a_test_token';

  beforeEach(() => {
    Context.API_VERSION = ApiVersion.April21;
  });

  it('test_1', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const application_credit = new ApplicationCredit({session: test_session});
    application_credit.description = "application credit for refund";
    application_credit.amount = 5.0;
    await application_credit.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2021-04/application_credits.json',
      query: '',
      headers,
      data: { "application_credit": {description: "application credit for refund", amount: 5.0} }
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const application_credit = new ApplicationCredit({session: test_session});
    application_credit.description = "application credit for refund";
    application_credit.amount = 5.0;
    application_credit.test = true;
    await application_credit.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2021-04/application_credits.json',
      query: '',
      headers,
      data: { "application_credit": {description: "application credit for refund", amount: 5.0, test: true} }
    }).toMatchMadeHttpRequest();
  });

  it('test_3', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await ApplicationCredit.all({
      session: test_session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-04/application_credits.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_4', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await ApplicationCredit.find({
      session: test_session,
      id: 140583599,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-04/application_credits/140583599.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

});
