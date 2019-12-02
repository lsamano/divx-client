import React from 'react';
import { Link } from 'react-router-dom';
import { Image, List } from 'semantic-ui-react';

const TournCard = ({ tournament }) => {
  return (
    <List.Item>
      <Image avatar src={tournament.image} size="small"/>
      <List.Content>
        <List.Header>
          { tournament.title }
        </List.Header>
        <List.Description>
          <p>
            Format: Single Elimination
          </p>
          {tournament.description}
          <p>
            <Link to={`/tournaments/${tournament.id}`}>
              See Tournament Info
            </Link>
          </p>
        </List.Description>
      </List.Content>
    </List.Item>
  )
}

export default TournCard;
