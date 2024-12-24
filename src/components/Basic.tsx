import { Accordion } from '@ark-ui/react/accordion'
import { css } from '../../styled-system/css'

export const Basic = () => {
  return (
    <Accordion.Root defaultValue={['React']} className={css({
        fontWeight: 'bolder',
        bg: 'red.500',
        width: 300,
        padding: 3,
    })}>
      {['React', 'Solid', 'Vue'].map((item) => (
        <Accordion.Item key={item} value={item} className={css({
            bg: 'gray.100',
            padding: 1,
            borderRadius: 'md',
            _active: {
                bg: 'brand.primary'
            }
        })}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              {">"}
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}