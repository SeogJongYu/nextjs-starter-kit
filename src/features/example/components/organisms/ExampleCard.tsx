'use client';

import React from 'react';
import { ExampleItem } from '@/features/example/model/types';
import { formatExampleItem } from '@/features/example/utils/formatter';
import { Card } from '@/shared/components/molecules/Card';

interface ExampleCardProps {
  item: ExampleItem;
}

export function ExampleCard({ item }: ExampleCardProps) {
  const formatted = formatExampleItem(item);

  return (
    <Card>
      <Card.Header>
        <Card.Title>{formatted.title}</Card.Title>
      </Card.Header>
      <Card.Content>
        <p className="text-muted-foreground text-sm">
          {formatted.shortDescription}
        </p>
        <time className="text-xs text-gray-500">
          {formatted.createdAtFormatted}
        </time>
      </Card.Content>
    </Card>
  );
}
