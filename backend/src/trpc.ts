import { initTRPC } from '@trpc/server'
import _ from 'lodash'

const ideas = _.times(100, (i) => ({
  nick: `cool-idea-nick-${i + 1}`,
  name: `Idea ${i + 1}`,
  description: `Description of idea ${i + 1}...`,
  text: _.times(100, (j) => `<p>Text paragraph ${j + 1} of idea ${i + 1}...</p>`).join(''),
}))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas: ideas.map((idea) => _.pick(idea, ['nick', 'name', 'description'])) }
  }),
})

export type TrpcRouter = typeof trpcRouter
