---
title: Governance
---

There are a number of entities which play a role in the governance of the platform –

- **Mindplex Community**: all MPX token holders
- **Mindplex Network Council**: an entity consisting of 5-20 community members, elected by the Mindplex Community
- **Mindplex Media Management**: the editorial and technical team
- **Mindplex Media Board of Directors**: the executive board members

Mindplex Media Management will work closely with the Mindplex Network Council to make big decisions about the Mindplex site and the development of Mindplex AI technology. If the Network Council thinks that Media Management isn't taking its suggestions seriously, it can go straight to the Mindplex Media Board of Directors.

Members of the Mindplex Network Council will be chosen by people who own MPX tokens, which are part of the Mindplex community. The Mindplex Network Council will be elected by members whose reputation (balance of MPXR tokens) is not in the bottom 20%. Voting is limited to members whose reputation is not in the bottom 20%. \
 \
Voting on governance proposals will adhere to the principles of liquid democracy/delegative democracy. Users can vote on proposals directly or take a more hands-off approach by delegating their MPX tokens as voting power to someone else, who then votes for them. Delegate elections are open to all members of the community.

When one user (Alice) delegates their votes to another (Bob), the MPXR balance of the second user (Bob) is used to measure the weight of the vote.

The number of votes a community member has is proportional to f(IP), where IP is the balance of MPX tokens weighted by the balance of MPXR (after normalization) tokens, and f(x) is a function defined as:

    f(x) = x, for x &lt; T

    f(x) = T + sqrt(x-T), for x > T

    with T = XXX

In Phase 1, only the Foundation can make proposals. In later phases, the power to make proposals will be given to the community of token holders. See the “Transition to DAO” section below for more information on Mindplex's Governance phases.
